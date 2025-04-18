const onMove = (n, elem) => elem.style.height = `${n}px`;

const animateShow = (to = 120) => createAnimate({
    from: 0,
    to,
    duration: 300,
    onStart(elem) {
        elem.classList.add('playing');
        elem.classList.remove('hidden');
    },
    onMove,
    onEnd(elem) {
        elem.classList.remove('playing');
    },
});

const animateHide = (from = 120) => createAnimate({
    from,
    to: 0,
    duration: 300,
    onStart(elem) {
        elem.classList.add('playing');
    },
    onMove,
    onEnd(elem) {
        elem.classList.remove('playing');
        elem.classList.add('hidden');
    },
});

const rowHeight = 30;
const totalHeight = (box, H = rowHeight) => box.querySelectorAll('li').length * H;

const container = document.querySelector('.menu-container');
container.addEventListener('click', function({target}) {

    if(target.tagName !== 'H2') return;

    // 上一个打开的子菜单存在，且动画已结束
    const prev = this.querySelector('.submenu.active');
    if(prev && !prev.classList.contains('playing')) {
        prev.classList.remove('active');
        const hiding = animateHide(totalHeight(prev));
        hiding(prev);
    }
    
    // 当前子菜单并非上一子菜单，且动画已结束
    const submenu = target.parentElement.querySelector('.submenu');
    if(prev !== submenu && !submenu.classList.contains('playing')) {
        submenu.classList.add('active');
        const showing = animateShow(totalHeight(submenu));
        showing(submenu);
    }
});