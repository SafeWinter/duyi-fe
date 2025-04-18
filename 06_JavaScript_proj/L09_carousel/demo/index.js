const data = [...Array(5).keys()]
    .map(i => `./img/wallpaper${i + 1}.jpg`);

const container = document.querySelector('.carousel-container');
const $ = container.querySelector.bind(container);

const getOptions = box => ({
    step1: parseFloat(getComputedStyle(box).width),
    timeout1: 2000,
    timeout2: 500,
    frames: 50
});

const options = getOptions(container);

let curIdx = 0;

function renderIndicator(parent) {
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    data.forEach((_, i) => {
        const point = document.createElement('div');
        point.className = `indicator-item ${i === 0 ? 'active' : ''}`;
        point.setAttribute('data-index', i);
        indicator.appendChild(point);
    });
    
    parent.insertBefore(indicator, $('.arrow'));
}

function renderCaroList(parent) {
    const caroList = document.createElement('div');
    caroList.className = 'carousel-list';

    data.concat(data[0]).forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.setAttribute('alt', `image${i + 1}`);
        caroList.appendChild(img);
    });

    // 动态计算主图容器实际宽度
    const imgCount = data.length + 1; // 轮播图多一张图片
    const caroWidth = getOptions(container).step1 * imgCount;
    // console.log('caroWidth:', caroWidth);
    caroList.style.width = `${caroWidth}px`;

    parent.insertBefore(caroList, $('.arrow'));
}

function toggleImg(index) {
    const distance = index * getOptions(container).step1;
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
    $('.indicator').addEventListener('click', function({target}) {
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
    const length = data.length;
    
    // 1. 左箭头点击事件
    $('.arrow-left').addEventListener('click', function() {
        curIdx = (curIdx - 1 + length) % length;
        toggleImg(curIdx);
        updateIndicator(curIdx);
    });

    // 2. 右箭头点击事件
    $('.arrow-right').addEventListener('click', function() {
        curIdx = (curIdx + 1) % length;
        toggleImg(curIdx);
        updateIndicator(curIdx);
    });
}

function bindMouseEnterLeave() {

    container.addEventListener('mouseenter', stopPlay);
    
    container.addEventListener('mouseleave', function () {
        const autoPlay = createAnimation(getOptions(container));
        autoPlay($('.carousel-list'));
    });
}

// 1. 渲染主图容器
function renderCarousel(parent) {
    // 1. 主图容器
    renderCaroList(parent);
    // 2. 导航条容器
    renderIndicator(parent);    
}

function bindEvents() {
    // 1. 注册导航条点击事件
    bindIndicatorClick();
    // 2. 注册左右箭头点击事件
    bindHoverEvents();
    // 3. 注册鼠标悬停/移出事件
    bindMouseEnterLeave();
}

function initPlay(box) {
    const caroList = $('.carousel-list');
    const autoPlay = createAnimation(getOptions(box));
    autoPlay(caroList);
}


renderCarousel(container);
initPlay(container);
bindEvents();