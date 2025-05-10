const body = document.querySelector('body');
const $ = (selector, parent = body) => parent.querySelector(selector);
const $$ = (selector, parent = body) => parent.querySelectorAll(selector);

/**
 * 从网络获取歌词数据
 * @returns Promise
 */
async function getLrc() {
  return await fetch('https://study.duyiedu.com/api/lyrics')
    .then(res => res.json())
    .then(({data}) => data);
}

const player = $('#player');
const container = $('.container');
const lrc = $('.lrc', container);

let lyrics = [];
const lrcHeight = 32; // px
const numLines = 15;  // 歌词区域展示的总行数
const initOffset = 5; // 行数
const correction = 0.5; // 秒,歌词偏移量

/**
 * 解析歌词
 * @param {string} data 歌词数据,格式为 [mm:ss.xx]歌词
 * @returns {Array} 解析后的歌词数组,格式为 [{time: 0, text: '歌词'}, ...]
 */
function parseLyrics(data) {
  const regexp = /^\[(\d{2}):(\d{2})\.(\d{2})\](.*)$/;
  const lines = data.split('\n');
  // console.log('lines:', lines);
  return lines
    .filter(line => regexp.test(line))
    .reduce((acc, line) => {
      const [_, m, s, fr, text] = line.match(regexp);
      const time = parseInt(m) * 60 + parseInt(s) + parseInt(fr) / 100;
      acc.push({time, text});
      return acc;
    }, []);
}

function offsetLyrics(index, lrcBox = lrc) {
  const init = initOffset * lrcHeight;
  const offset = init - Math.max(0, index) * lrcHeight;
  lrcBox.style.transform = `translateY(${offset}px)`;
}

function highLightLyric(index, parent = lrc) {
  // $$('li', lrc).forEach((li, i) => 
  //   li.classList.toggle('active', i === index));
  const prev = $('.active', parent);
  prev && prev.classList.remove('active');
  const curr = $(`li:nth-child(${index + 1})`, parent);
  curr && curr.classList.add('active');
}

async function renderPage() {
  // 1. 获取并解析歌词数据
  lyrics = parseLyrics(await getLrc());
  // console.log(lyrics);
  // 2. 渲染歌词
  const fragment = lyrics.reduce((frag, {text}) => {
    const li = document.createElement('li');
    li.innerText = text.trim().length === 0 ? '(music)' : text;
    frag.appendChild(li);
    return frag;
  }, document.createDocumentFragment());
  lrc.innerHTML = '';
  lrc.appendChild(fragment);
  // 3. 设置歌词区高度
  lrc.style.height = `${numLines * lrcHeight}px`;
  // 4. 设置歌词初始位置
  offsetLyrics(0);
}

function throttle(fn, delay) {
  let t0 = Date.now() - delay;
  return (...args) => {
    const now = Date.now();
    if(now - t0 >= delay) {
      t0 = now;
      fn.apply(null, args);
    }
  }
}

function bindEvents() {
  player.addEventListener('timeupdate', throttle(({target}) => {
    const index = findTargetIndex(target.currentTime);
    highLightLyric(index - 1);
    offsetLyrics(index);
  }, 500));
}

function findTargetIndex(currentTime, data = lyrics, corr = correction) {
  // use binary search
  let [left, right] = [0, data.length - 1];
  let target = currentTime + corr;
  // let k = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (data[mid].time < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    // k++;
  }
  // console.log('二分查找次数:', k);
  return left;
}

function init() {
  renderPage()
    .then(bindEvents)
    .catch(err => {
      console.error('页面初始化失败:', err);
    })
}

init();