const data = [...Array(5).keys()]
    .map(i => `./img/wallpaper${i + 1}.jpg`);
const container = document.querySelector('.carousel-container');
const $ = container.querySelector.bind(container);
const $$ = container.querySelectorAll.bind(container);

let curIdx = 0;

// 轮播图效果：
// 1. 自动播放效果
// 2. 注册事件：
//   2.1 悬停主图：停止自动播放
//   2.2 离开主图：继续自动播放
//   2.3 点击小图：切换主图
//   2.4 点击两侧按钮：切换主图
// 3. 过渡动画效果：飞入飞出

// 1. 渲染主图容器
function renderCarousel() {
    const fragImg = document.createDocumentFragment();
    data.concat(data[0]).forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.setAttribute('alt', `image${i + 1}`);
        fragImg.appendChild(img);
    });
    
    const fragPnt = document.createDocumentFragment();
    data.forEach((_, i) => {
        const point = document.createElement('div');
        point.className = `indicator-item ${i === 0 ? 'active' : ''}`;
        point.setAttribute('data-index', i);
        fragPnt.appendChild(point);
    });
    const caroList = $('.carousel-list');
    caroList.innerHTML = '';
    caroList.appendChild(fragImg);

    const indicator = $('.indicator');
    indicator.innerHTML = '';
    indicator.appendChild(fragPnt);
}

renderCarousel();



function toggleImg(index) {
    const width = getComputedStyle(container).width;
    const distance = index * parseFloat(width);
    const caroList = $('.carousel-list');
    caroList.style.marginLeft = `${-distance}px`;
}

function updateIndicator(index) {
    const prev = $('.indicator .active');
    prev && prev.classList.remove('active');
    const cur = $(`.indicator-item[data-index="${index}"]`);
    cur && cur.classList.add('active');
}

function bindIndicatorClick() {
    const indicator = $('.indicator');
    indicator.addEventListener('click', function({target}) {
        if(target.classList.contains('indicator-item')) {
            // toggle active class
            const prev = this.querySelector('.active');
            prev && prev.classList.remove('active');
            target.classList.add('active');

            // change main image
            const idx = parseInt(target.getAttribute('data-index'));
            // console.log('current index:', idx);
            if (idx !== curIdx) {
                curIdx = idx;
                toggleImg(curIdx);
            }
        }
    });
}



function bindHoverEvents() {
    const arrowLeft = $('.arrow-left');
    const arrowRight = $('.arrow-right');
    arrowLeft.addEventListener('click', function(e) {
        // console.log('left arrow clicked, current index: ', curIdx);
        curIdx = (curIdx - 1 + data.length) % data.length;
        toggleImg(curIdx);
        updateIndicator(curIdx);
    });
    arrowRight.addEventListener('click', function(e) {
        // console.log('right arrow clicked, current index: ', curIdx);
        curIdx = (curIdx + 1) % data.length;
        toggleImg(curIdx);
        updateIndicator(curIdx);
    });
}

function bindEvents() {
    bindIndicatorClick();
    bindHoverEvents();
}

const options = {
    step1: parseFloat(getComputedStyle(container).width),
    timeout1: 2000,
    timeout2: 500,
    frames: 50
};
let outer = null;

function makeAnimation({
    step1,
    timeout1,
    timeout2,
    frames
} = options) {

    const step2 = step1 / frames;
    const timeout3 = timeout2 / frames;

    return dom => {
        if(outer) {
            return;
        }

        let i = curIdx;
        updateIndicator(curIdx);
        outer = setInterval(() => {
            curIdx = i + 1;
            // console.log('i, curIdx:', i, curIdx);
            const h1 = step1 * i;
            dom.style.marginLeft = `${-h1}px`;
            
            if(++i === data.length) {
                curIdx = i = 0;
            }
            
            let h2 = h1;
            const inner = setInterval(function(){
                h2 += step2;
                dom.style.marginLeft = `${-h2}px`;
                if(h2 >= h1 + step1) {
                    updateIndicator(curIdx);
                    clearInterval(inner);
                }
            }, timeout3);
        }, timeout1);
    };

}

function stopPlay() {
    if(outer) {
        clearInterval(outer);
        outer = null;
    }
}


const autoPlay = makeAnimation({
    step1: parseFloat(getComputedStyle(container).width),
    timeout1: 2000,
    timeout2: 500,
    frames: 50
});

const caroList = $('.carousel-list');
autoPlay(caroList);

bindEvents();

container.addEventListener('mouseenter', stopPlay);
container.addEventListener('mouseleave', function() {
    const step1 = parseFloat(getComputedStyle(container).width);
    const opts = Object.assign(options, {step1});
    const autoPlay = makeAnimation(opts);
    autoPlay(caroList);
});