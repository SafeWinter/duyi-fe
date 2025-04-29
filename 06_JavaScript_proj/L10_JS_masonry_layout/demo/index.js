const container = document.querySelector('.container');
const $ = (selector, parent = container) => parent.querySelector(selector);
const $$ = (selector, parent = container) => parent.querySelectorAll(selector);

const columns = [];
const COLUMN_WIDTH = 200; // px
const gap0 = 10; // px

function fillImages() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 41; i++) {
        const img = document.createElement('img');
        img.src = `./img/${i}.jpg`;
        fragment.appendChild(img);
    }
    $('.canvas').appendChild(fragment);
}

function setPosition() {
    // console.log(new Date().toLocaleTimeString(), 'current width:', container.clientWidth);
    
    const WIDTH = container.clientWidth - 32;
    const size = Math.floor((WIDTH + gap0) / (COLUMN_WIDTH + gap0));
    const colGap = Math.round((WIDTH - size * COLUMN_WIDTH) * 10 / (size - 1)) / 10;
    const unitOffsetLeft = colGap + COLUMN_WIDTH;
    const rowGap = Math.min(gap0, colGap);

    columns.length = size;
    columns.fill(0, 0, size);
    
    Array.from($$('.canvas img')).forEach(img => {
        const iTop = Math.min(...columns);
        const colIdx = columns.indexOf(iTop);
        const iLeft = colIdx * unitOffsetLeft;
        img.style.transform = `translate(${iLeft}px, ${iTop}px)`;

        img.style.width = `${COLUMN_WIDTH}px`;
        const iHeight = img.clientHeight; // real-time height
        columns[colIdx] += iHeight + rowGap;
    });

    // console.log('columns:', columns);
    const maxHeight = Math.max(...columns);
    container.style.height = `${maxHeight + rowGap + 16}px`;
}

function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        if(timer) {
            clearInterval(timer);
        }
        timer = setTimeout(() => 
            fn.apply(this, args), delay);
    };
}

function init() {
    fillImages();
    window.onload = setPosition
    window.onresize = debounce(setPosition, 500);
}

init();