const bd = document.body;
const $ = bd.querySelector.bind(bd);
const $$ = bd.querySelectorAll.bind(bd);

let count = 5; // 初始抽奖次数
let curIdx = 0; // 当前抽奖索引
const total = 8; // 总奖品数量
const msgs = {}; // 存放抽中奖品的消息

// 选择指定的奖品元素
function selectPrize(index, isActive = false) {
    const activeClass = isActive ? '.active' : ''; // 是否选中
    return $(`.prize-item[data-id="${index + 1}"]${activeClass}`);
}

// 顺次移动一格
function nextMove() {
    const prev = selectPrize(curIdx, true);
    prev && prev.classList.remove('active');
    
    const nextIdx = (curIdx + 1) % total;
    const next = selectPrize(nextIdx);
    next.classList.add('active');
    
    curIdx = nextIdx; // 更新当前索引
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // 随机数
}

function runOnce(speed = 40) {
    let innerCount = 0,
        limit = getRandom(10, 50), // 随机抽奖次数
        timer = setInterval(() => {
        nextMove(); // 转到下一个奖品
        if (++innerCount >= limit) {
            clearInterval(timer); // 停止抽奖
            showResult(msgs[curIdx]); // 显示抽奖结果
        }
    }, speed);
}

function play() {
    // 先扣除再抽奖
    updateCount(--count);
    // 随机抽奖
    runOnce();
}

function updateCount(num = count) {
    $('.count').innerText = num; // 更新抽奖次数
}

function showResult(msg) {
    const bingo = curIdx !== 4;
    const gameOver = count < 0;
    const lastChance = count === 0;
    
    const result = gameOver ? '抽奖次数已用完' 
        : bingo ? `恭喜您获得${msg}` : `很遗憾您没有中奖`;
    const btnTxt = gameOver || lastChance ? '确定' : '再来一次';

    $('.mask').classList.add('show'); // 显示遮罩层
    $('.popup .msg').innerText = result; // 显示抽奖结果
    $('.popup .btn').innerText = btnTxt; // 显示按钮文本
}

function hideMask() {
    $('.mask').classList.remove('show'); // 隐藏遮罩层
}

function clickHandler(isMask = true) {
    return e => {
        isMask && hideMask();
        (count > 0) && play();
    };
}

function initState() {
    // 显示剩余抽奖次数
    updateCount();

    // 填充奖品信息字典
    $$('.prize-item').forEach(item => {
        const prizeName = item.querySelector('.prize-name').innerText; // 获取奖品名称
        const key = parseInt(item.dataset.id, 10) - 1; // 获取奖品ID
        msgs[key] = prizeName;
    });
}

function bindEvents() {
    // 注册抽奖按钮点击事件
    $('.control .btn').addEventListener('click', clickHandler(false));
    // 注册弹窗关闭按钮点击事件
    $('.popup .close').addEventListener('click', hideMask);
    // 注册弹窗确认/再来一次按钮点击事件
    $('.popup .btn').addEventListener('click', clickHandler());
}

function init() {
    // init available count
    initState();
    // bind button click events
    bindEvents();
}

init();