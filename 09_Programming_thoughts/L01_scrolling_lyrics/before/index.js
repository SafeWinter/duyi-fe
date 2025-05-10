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
const initOffset = 5; // 行数
const correction = 0.3; // 秒,歌词偏移量

/**
 * 解析歌词
 * @param {string} data 歌词数据,格式为 [mm:ss.xx]歌词
 * @returns {Array} 解析后的歌词数组,格式为 [{time: 0, text: '歌词'}, ...]
 */
function parseLyrics(data) {
  const regexp = /^\[(\d{2}):(\d{2})\.(\d{2})\](.*)$/;
  const lines = data.split('\n');
  const lyrics = lines
    .filter(line => regexp.test(line))
    .reduce((acc, line) => {
      const [, m, s, fr, text] = line.match(regexp);
      const time = parseInt(m) * 60 + parseInt(s) + parseInt(fr) / 100;
      acc.push({time, text});
      return acc;
    }, []);
  console.log(lyrics);
  return lyrics;
}

function computeOffset(index) {
  const init = initOffset * lrcHeight;
  return init - Math.max(0, index) * lrcHeight;
}

function highLightLyric(index) {
  const lis = Array.from($$('li', lrc));
  lis.forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
}

async function renderPage() {
  const data = await getLrc();
  lyrics = parseLyrics(data);
  const fragment = document.createDocumentFragment();
  lyrics.reduce((frag, {text}) => {
    const li = document.createElement('li');
    li.innerText = text;
    frag.appendChild(li);
    return frag;
  }, fragment);
  lrc.innerHTML = '';
  lrc.appendChild(fragment);
  // 初始偏移5行歌词
  const offset = initOffset * lrcHeight;
  lrc.style.transform = `translateY(${offset}px)`;
}

function bindEvents() {
  player.addEventListener('timeupdate', function (ev) {
    const currentTime = ev.target.currentTime;
    const index = lyrics.findIndex(({time}) => (currentTime + correction) < time);
    highLightLyric(index - 1);
    const offset = computeOffset(index);
    // console.log({index, offset});
    lrc.style.transform = `translateY(${offset}px)`;
  });
}

async function init() {
  await renderPage();
  bindEvents();
}

init();