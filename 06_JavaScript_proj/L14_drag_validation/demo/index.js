const container = document.querySelector('.container');
const $ = (selector, parent = container) => parent.querySelector(selector);

// DOM elements
const domPlug = $('.plug'),
    domSquare = $('.square'),
    domBlank = $('.blank'),
    domImage = $('.image'),
    domMsg = $('.content > .msg'),
    domTip = $('.slider .tip'),
    headerTip = $('.header > .tip');

const diffMax = 2; // px
const initLeft = -2; // px, the initial position of the plug

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function validatePosition() {
    const left0 = domBlank.offsetLeft;
    const left = domSquare.offsetLeft;
    const isValid = Math.abs(left - left0) <= diffMax;
    if(isValid) {
        domSquare.classList.add('hidden');
        domBlank.classList.add('hidden');

        domMsg.classList.add('pass') || domMsg.classList.remove('fail');
        domMsg.innerText = '验证成功';

        domPlug.onmousedown = null;
        domPlug.classList.add('forbidden');
    } else {
        domMsg.classList.add('fail') || domMsg.classList.remove('pass');
        domMsg.innerText = '验证失败';
        
        [domPlug, domSquare].forEach(elem => {
            elem.style.transition = 'left 0.5s ease-in-out';
            elem.style.left = `${initLeft}px`;
        });
    }
}

function makeDraggable(elem) {
    const maxLeft = domImage.offsetWidth - domBlank.offsetWidth;
    elem.onmousedown = ev1 => {
        domPlug.style.transition = 'none';
        domSquare.style.transition = 'none';
        domTip.style.opacity = 0;
        domSquare.classList.remove('hidden');

        const x0 = ev1.clientX;
        const left0 = ev1.target.offsetLeft;

        const mousemoveHandler = ev2 => {
            if(!ev2.target.classList.contains('plug')) {
                return;
            }
            domMsg.classList.remove('pass', 'fail');
            domMsg.innerText = '拖动图片完成验证';

            const dx = ev2.clientX - x0;
            const left = clamp(left0 + dx, initLeft, maxLeft);
            elem.style.left = `${left}px`;
            domSquare.style.left = `${left}px`;
        };

        const mouseupHandler = () => {
            window.onmousemove = null;
            window.onmouseup = null;

            validatePosition();
        };

        window.onmousemove = mousemoveHandler;
        window.onmouseup = mouseupHandler;
    };
}

function bindEvents(reset) {
    if(reset) return;

    domSquare.addEventListener('transitionend', ev => {
        domSquare.classList.add('hidden');
        domSquare.style.transition = 'none';
    });

    domPlug.addEventListener('transitionend', ev => {
        ev.target.style.transition = 'none';
        domTip.style.opacity = 1;
    });

    headerTip.addEventListener('click', ev => init(true));
}

function initTargetPosition() {
    const maxLeft = domImage.offsetWidth - domBlank.offsetWidth;
    const maxTop = domImage.offsetHeight - domBlank.offsetHeight;
    const targetLeft = getRandom(domBlank.offsetWidth / 2, maxLeft);
    const targetTop = getRandom(0, maxTop);

    domBlank.style.left = `${targetLeft}px`;
    domBlank.style.top = `${targetTop}px`;

    domSquare.style.top = `${targetTop}px`;
    domSquare.style.left = 0;
    domSquare.style.backgroundPosition = `-${targetLeft}px -${targetTop}px`;
}

function changeImageUrl() {
    const url = domImage.style.backgroundImage;
    const resultStr = url.replace(/\D/g, '');
    const currIdx = parseInt(resultStr, 10);
    const index = [1, 2, 3, 4, 5].filter(
        i => i !== currIdx)[getRandom(0, 3)];
    return `url(./img/t${index}.png)`
}

function initPage() {
    // 顶部提示
    domMsg.classList.remove('pass', 'fail');
    domMsg.innerText = '请完成图片验证';
    
    // 换图
    const newImgUrl = changeImageUrl();
    domImage.style.backgroundImage = newImgUrl;
    domSquare.style.backgroundImage = newImgUrl;
    
    domSquare.classList.add('hidden');
    domBlank.classList.remove('hidden');
    
    domPlug.classList.remove('forbidden');
    domPlug.style = '';
    domTip.style.opacity = 1; // 滑块提示栏复位

    initTargetPosition();
}

function init(reset = false) {
    initPage();
    bindEvents(reset);
    makeDraggable(domPlug);
}

init();