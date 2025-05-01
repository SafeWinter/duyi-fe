const container = document.querySelector('.container');
const $ = (selector, parent = container) => parent.querySelector(selector);

const domMask = $('.mask');
const domChosen = $('.target');
const domRefs = $('.refs');
const domImages = $('.images');

const ROTATE_ANGLE = 5; // 5圈
let needRefresh = false;

function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function renderRandomRefs() {
    // 随机生成一个目标图片的索引，范围在 0-15 之间
    const targetNum = random(0, 15);
    // 生成 100 张随机图片，其中 9 的倍数位置放置目标图片
    const html = Array.from({length: 100}, (_, i) => i)
        .map((num, idx) => {
            const imgIndex = (idx % 9 === 0) ? targetNum : random(0, 15);
            return `
                <figure class="item">
                    <figcaption class="item__num">${num}</figcaption>
                    <img class="item__img" src="./img/values/${imgIndex}.png" alt="image dict item1" />
                </figure>
            `.replace(/\n\s*/g, '');
        }).join('');
    domRefs.innerHTML = html;
    // 同步更新选中图片
    domChosen.src = `./img/values/${targetNum}.png`;
}

function rotate() {
    domImages.style.transition = 'transform 3s ease-in-out';
    domImages.style.transform = `rotate(${ROTATE_ANGLE}turn)`;
}

function resetRotate(target) {
    target.style.transition = 'none';
    target.style.transform = `rotate(-${ROTATE_ANGLE}turn)`;
}

function retry() {
    needRefresh = false;
    domMask.classList.remove('hidden');
    domChosen.classList.add('hidden');
    renderRandomRefs();
}

function resetImages() {
    domMask.classList.add('hidden');
    domChosen.classList.remove('hidden');
}

function bindEvents() {
    domMask.addEventListener('click', ({target}) => {
        if(needRefresh) {
            if(confirm('是否再玩一次？')) {
                retry();
            }
            return;
        }
        needRefresh = true;
        rotate();
    });

    domImages.addEventListener('transitionend', ({target}) => {
        resetRotate(target);
        resetImages();
    });

    domChosen.addEventListener('click', ev => {
        if(confirm('是否再玩一次？')) {
            retry();
        }
        return;
    });
}

function init() {
    renderRandomRefs();
    bindEvents();
}

init();