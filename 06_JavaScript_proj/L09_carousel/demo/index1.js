const data = [...Array(5).keys()]
    .map(i => `./img/wallpaper${i + 1}.jpg`);
const maxIdx = data.length;
const container = document.querySelector('.carousel-container');
const $ = container.querySelector.bind(container);

let curIdx = 0;  // current index

function renderCaroList(parent, data) {
    const caroList = $('.carousel-list');
    const frag = document.createDocumentFragment();
    data.concat(data[0]).forEach((url, i) => {
        const img = document.createElement('img');
        img.src = url;
        img.setAttribute('alt', `image${i + 1}`);
        frag.appendChild(img);
    });

    // 动态计算主图容器实际宽度
    caroList.style.width = `${parent.clientWidth * (maxIdx + 1)}px`;
    caroList.innerHTML = ''; // 清空原有内容
    caroList.appendChild(frag);
}

function renderIndicator(data) {
    const indicator = $('.indicator');
    const frag = document.createDocumentFragment();
    data.forEach((_, i) => {
        const item = document.createElement('div');
        item.className = `indicator-item ${i === 0 ? 'active' : ''}`;
        item.setAttribute('data-index', i);
        frag.appendChild(item);
    });
    indicator.innerHTML = ''; // 清空原有内容
    indicator.appendChild(frag);
}

let playing = false;
function moveTo(index, cbEnd) {
    if(playing) {
        console.warn('The animation is playing, please wait...');
        return;
    }
    playing = true;
    const width = container.clientWidth;
    const moving = createAnimate({
        duration: 500,
        from: curIdx * width,
        to: index * width,
        onStart(elem){
            // console.log('index:', index, 'curIdx:', curIdx);
        },
        onMove(n, elem) {
            elem.style.marginLeft = `${-n}px`;
        },
        onEnd(elem) {
            curIdx = index;
            const isEdge = [maxIdx, 0].includes(curIdx);
            updateIndicator(isEdge ? 0 : curIdx);
            cbEnd && cbEnd(elem);
            playing = false;
        }
    });
    moving($('.carousel-list'));
}

function updateIndicator(index) {
    const prev = $('.indicator .active');
    prev && prev.classList.remove('active');
    const cur = $(`.indicator-item[data-index="${index}"]`);
    cur && cur.classList.add('active');
}

function next() {
    const newIdx = curIdx + 1;
    let cbEnd = null;
    if(newIdx >= maxIdx) {
        cbEnd = function(elem) {
            elem.style.marginLeft = `0px`;
            curIdx = 0;
        };
    }
    moveTo(newIdx, cbEnd);
}

function prev() {
    let newIdx = curIdx - 1;
    if(newIdx < 0) {
        // 初始加载点击左箭头时，按最后一张向倒数第二张考虑
        curIdx = maxIdx;
        newIdx = curIdx - 1;
    }
    moveTo(newIdx);
}

let timer = null;
const interval = 2000;
function autoPlay() {
    if(timer) {
        clearInterval(timer);
    } else {
        timer = setInterval(next, interval);
    }
}
function stopPlay() {
    if(timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 1. 渲染主图容器
function renderCarousel(parent, data) {
    // 1. 主图容器
    renderCaroList(parent, data);
    // 2. 导航条容器
    renderIndicator(data);
}

function handleEvents() {
    // 1. 注册导航条点击事件
    $('.indicator').addEventListener('click', function({target}) {
        if(target.classList.contains('indicator-item')) {
            const index = parseInt(target.dataset.index, 10);
            if (index !== curIdx) {
                moveTo(index);
            }
        }
    });

    // 2. 左箭头点击事件
    $('.arrow-left').addEventListener('click', prev);

    // 3. 右箭头点击事件
    $('.arrow-right').addEventListener('click', next);
    
    // 4. 注册鼠标悬停事件
    container.addEventListener('mouseenter', stopPlay);
    
    // 5. 注册鼠标移出事件
    container.addEventListener('mouseleave', autoPlay);
}

function init() {
    renderCarousel(container, data);
    handleEvents();
    autoPlay();
}

init();