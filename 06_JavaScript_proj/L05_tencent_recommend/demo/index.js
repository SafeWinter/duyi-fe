const container = document.querySelector('.container');
const $ = container.querySelector.bind(container);
const $$ = container.querySelectorAll.bind(container);

let curIdx = 0; // 当前高亮列表项索引值
const interval = 3000; // 自动切换时间间隔

const hotList = $('.hot-list');

const updateMainContent = ({bg, img}) => {
    $('figure.bg').style.backgroundColor = bg;
    $('figure a').href = '#';
    $('figure img').src = img;
};

const renderHotList = () => {

    updateMainContent(data[0]);
    
    const listHTML = data.map((d, idx) => `
            <li class="${idx === 0 ? 'active' : ''}">
            <a href="#" title="${d.title}:${d.desc}">
                <span class="title">${d.title}</span>
                <span class="desc">${d.desc}</span>
            </a>
            </li>`.replace(/\n\s*/g, '')
        ).join('');
    hotList.innerHTML = listHTML;
};

const nextHighlight = () => {
    const nextIdx = (curIdx + 1) % data.length;

    // toggle active class
    const listItems = hotList.children;
    listItems[curIdx].classList.remove('active');
    listItems[nextIdx].classList.add('active');

    // update main content
    curIdx = nextIdx;
    updateMainContent(data[curIdx]);
};


let timer = null;

const autoSwitch = () => {
    if(timer) {
        return;
    }
    timer = setInterval(nextHighlight, interval);
};

const stopAutoSwitch = () => {
    if(timer) {
        clearInterval(timer);
        timer = null;
    }
}

const mouseEnterHandler = idx => ({target}) => {
    if(timer) {
        stopAutoSwitch();
    }
    
    curIdx = idx;

    // toggle active class
    const prevActive = $('.hot-list li.active');
    prevActive && prevActive.classList.remove('active');
    target.classList.add('active');

    // update main content
    updateMainContent(data[curIdx]);
};

const mouseLeaveHandler = idx => e => {
    curIdx = idx;
    if(!timer) {
        autoSwitch();
    }
};

const bindMouseEvents = () => {
    $$('.hot-list li').forEach((item, idx) => {
        item.addEventListener('mouseenter', mouseEnterHandler(idx));
        item.addEventListener('mouseleave', mouseLeaveHandler(idx));
    });
};

const init = () => {
    renderHotList();

    bindMouseEvents();
    
    autoSwitch();
};

init();