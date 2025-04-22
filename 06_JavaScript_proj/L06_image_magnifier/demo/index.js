const container = document.querySelector('.container');
const $ = container.querySelector.bind(container);
const $$ = container.querySelectorAll.bind(container);

const data = [
    {s: './img/imgA_1.jpg', m: './img/imgA_2.jpg', l: './img/imgA_3.jpg'},
    {s: './img/imgB_1.jpg', m: './img/imgB_2.jpg', l: './img/imgB_3.jpg'},
    {s: './img/imgC_1.jpg', m: './img/imgC_2.jpg', l: './img/imgC_3.jpg'},
];

let curIdx = 0;
const SCALE_RATIO = 800 / 450;

function updateCurrentImg(index) {
    const src = data[index].l;
    $('.left-img').style.background = `url(${src}) no-repeat center center / cover`;
}

function renderImgList() {
    const imgList = data.map((img, idx) => `
            <li class="${idx === 0 ? 'active' : ''}">
                <img src="${img.s}" alt="img${idx + 1}">
            </li>`.replace(/\n\s*/g, '')
        ).join('');
    $('.img-list').innerHTML = imgList;

    updateCurrentImg(curIdx);
};

function handleMouseEnter(index) {
    return ({target}) => {
        $('li.active').classList.remove('active');
        target.classList.add('active');
        
        curIdx = index;
        updateCurrentImg(curIdx);
    };
}

function bindImgListEvents() {
    $$('.img-list li').forEach((li, idx) => 
        li.addEventListener('mouseenter', handleMouseEnter(idx)));
}

function bindHoverEventForCurrImg() {
    const box = $('.left-img');
    const {
        width: boxWidth, 
        height: boxHeight, 
        left: boxLeft, 
        top: boxTop
    } = box.getBoundingClientRect();
    const MASK_SIZE = 450 / SCALE_RATIO;
    const HALF_MASK_SIZE = MASK_SIZE / 2;

    function clamp (value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
    
    function syncImageLens(x, y) {
        const lens = $('.right-img');
        lens.style.background = `url(${data[curIdx].l})`;
        const [X, Y] = [x, y].map(v => v * SCALE_RATIO);
        lens.style.backgroundPosition = `-${X}px -${Y}px`;
    }

    function getCenterCoordinates({clientX, clientY}) {
        const x = clientX - boxLeft; // 鼠标在图片框内的横坐标
        const y = clientY - boxTop;  // 鼠标在图片框内的纵坐标
        
        const maxLeft = boxWidth - MASK_SIZE;
        const maxTop = boxHeight - MASK_SIZE;
        
        const left = clamp(x - HALF_MASK_SIZE, 0, maxLeft);
        const top = clamp(y - HALF_MASK_SIZE, 0, maxTop);

        return [left, top];
    }

    function handleMaskAndLensImg(maskDom, ev) {
        const [x, y] = getCenterCoordinates(ev);

        maskDom.style.left = `${x}px`;
        maskDom.style.top = `${y}px`;

        syncImageLens(x, y);
    }

    box.addEventListener('mouseenter', e1 => {
        // 鼠标初始移入时图片框时定位遮罩坐标（以及放大位置）
        const elMask = $('.mask');
        handleMaskAndLensImg(elMask, e1);

        // 鼠标移入遮罩后根据实时移动坐标更新遮罩（以及放大位置）
        const mouseMoveHandler = ev => handleMaskAndLensImg(elMask, ev);
        elMask.addEventListener('mousemove', mouseMoveHandler);

        box.addEventListener('mouseleave', e2 => {
            elMask.removeEventListener('mousemove', mouseMoveHandler);
            // 鼠标移出图片框，放大区域消失（重置）
            $('.right-img').style.background = ``;
        });
    });
}

function init(){
    renderImgList();
    bindImgListEvents();
    bindHoverEventForCurrImg();
}

init();