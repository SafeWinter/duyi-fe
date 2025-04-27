const container = document.querySelector(".container");
const $ = (selector, parentDom = container) => parentDom.querySelector(selector);

const CURRENT_ITEM_SELECTOR = 'li:first-of-type';
const NEXT_ITEM_SELECTOR = 'li:last-of-type';

const hour1 = $('.h1 > ul');
const hour2 = $('.h2 > ul');
const minute1 = $('.m1 > ul');
const minute2 = $('.m2 > ul');
const second1 = $('.s1 > ul');
const second2 = $('.s2 > ul');

const digits = [hour1, hour2, minute1, minute2, second1, second2];

function generateDictMap(length) {
    const safeNextIdx1 = i => (i - 1 + length) % length;
    const safeNextIdx2 = i => (i - 2 + length) % length;
    return Array.from({length},(_, i) => i)
        .reduce((obj, i) => Object.assign(obj, {
                [`num${i}`]: [`num${safeNextIdx1(i)}`, `num${safeNextIdx2(i)}`]
            }), {});
}

const DICT_MAP_BASE10 = generateDictMap(10);
const DICT_MAP_BASE6 = generateDictMap(6);
const DICT_MAP_BASE3 = generateDictMap(3);

function comeToZero(digit) {
    const currentLi = $(CURRENT_ITEM_SELECTOR, digit);
    const index = currentLi.className.slice(-1);
    return parseInt(index, 10) === 0;
}

function prevDigitsAllZero(digits) {
    return digits.every(comeToZero);
}

// 1st digit of hours
function countDownH1() {
    countDownNext(hour1);
    if(comeToZero(hour1)) {
        return;
    }
}

// 2nd digit of hours
function countDownH2() {
    countDownNext(hour2);
    if(comeToZero(hour2)) {
        if(prevDigitsAllZero(digits.slice(0, 1))) {
            return;
        }
        countDownH1();
    }
}

// 1st digit of minutes
function countDownM1() {
    countDownNext(minute1);
    if(comeToZero(minute1)) {
        if(prevDigitsAllZero(digits.slice(0, 2))) {
            return;
        }
        countDownH2();
    }
}

// 2nd digit of minutes
function countDownM2() {
    countDownNext(minute2);
    if(comeToZero(minute2)) {
        if(prevDigitsAllZero(digits.slice(0, 3))) {
            return;
        }
        countDownM1();
    }
}

// 1st digit of seconds
function countDownS1() {
    countDownNext(second1);
    if(comeToZero(second1)) {
        if(prevDigitsAllZero(digits.slice(0, 4))) {
            return;
        }
        countDownM2();
    }
}

// 2nd digit of seconds
function countDownS2() {
    countDownNext(second2);
    if(comeToZero(second2)) {
        if(prevDigitsAllZero(digits.slice(0, 5))) {
            return;
        }
        countDownS1();
    }
}

function countDownNext(ul) {
    ul.style.transition = 'margin-top 0.5s linear';
    ul.style.marginTop = '-120px';
}

function updateClasses(target, dictMap) {
    const li1 = $(CURRENT_ITEM_SELECTOR, target);
    const li2 = $(NEXT_ITEM_SELECTOR, target);
    const old1 = li1.className;
    const [new1, new2] = dictMap[old1];
    li1.classList.remove(old1) || li1.classList.add(new1);
    li2.classList.remove(new1) || li2.classList.add(new2);
}

/**
 * Generates a `transitionend` event handler with the specific dictionary map of class names.
 * @param {Map<currCls, [nextCls1, nextCls2]>} dictMap - A map of class names to their next group of class names.
 * @returns {Function} - Event handler function attached to the `transitionend` event.
 */
function generateEventHandlerBy(dictMap) {
    return ({target}) => {
        // 1. Remove the transition effect
        target.style.transition = 'none';
        // 2. Update the next group of classes
        updateClasses(target, dictMap);
        // 3. Reset margin-top
        target.style.marginTop = '0px';
    };
}

function nextSafeDigit10(n) {
    return (--n + 10) % 10;
}

function nextSafeDigit6(n) {
    return (--n + 6) % 6;
}

function nextSafeDigit3(n) {
    return (--n + 3) % 3;
}

function renderSeconds(ss) {
    renderTimeSegment(ss, [second1, second2], [nextSafeDigit6, nextSafeDigit10]);
}

function renderMinutes(mm) {
    renderTimeSegment(mm, [minute1, minute2], [nextSafeDigit6, nextSafeDigit10]);
}

function validate(hh) {
    const [h1, h2] = hh.split('').map(el => parseInt(el, 10));
    const invalid = (h1 > 2) || (h1 === 2 && h2 > 3);
    return !invalid;
}

function renderHours(hh) {
    if(validate(hh)) {
        renderTimeSegment(hh, [hour1, hour2], [nextSafeDigit3, nextSafeDigit10]);
    } else {
        throw new SyntaxError('Invalid hour format!');
    }
}

function renderTimeSegment(dd, [digit1, digit2], [next1, next2]) {
    const [d1, d2] = dd.split('').map(el => parseInt(el, 10));
    $(CURRENT_ITEM_SELECTOR, digit1).className = `num${d1}`;
    $(NEXT_ITEM_SELECTOR, digit1).className = `num${next1(d1)}`;
    $(CURRENT_ITEM_SELECTOR, digit2).className = `num${d2}`;
    $(NEXT_ITEM_SELECTOR, digit2).className = `num${next2(d2)}`;
}

let timer = null;
function countDown() {
    if(timer) {
        return;
    }
    console.log('Start counting down...');
    timer = setInterval(() => {
        if(prevDigitsAllZero(digits)) {
            stopCountDown();
            console.warn('Time is up!!!');
            return;
        }
        countDownS2();
    }, 1000);
}

function stopCountDown() {
    if(timer) {
        clearInterval(timer);
        timer = null;
    }
    console.log('Stop counting down...');
}

function registerEvents() {
    [second2, minute2, hour2].forEach(digit => 
        digit.addEventListener('transitionend', generateEventHandlerBy(DICT_MAP_BASE10)));

    [second1, minute1].forEach(digit => 
        digit.addEventListener('transitionend', generateEventHandlerBy(DICT_MAP_BASE6)));

    hour1.addEventListener('transitionend', generateEventHandlerBy(DICT_MAP_BASE3));
}

function initTime() {
    const hhmmss = '00:00:10';
    const [hh,mm,ss] = hhmmss.split(':');
    renderHours(hh);
    renderMinutes(mm);
    renderSeconds(ss);
}

function init() {
    initTime();
    registerEvents();
    countDown();
}

init();