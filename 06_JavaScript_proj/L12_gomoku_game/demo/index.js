const container = document.querySelector('.container');
const $ = (selector, parent = container) => parent.querySelector(selector);

// DOMs
const domBoard = $('.board');
const domStones = $('.stones');

const WINNING_COUNT = 5;
const BOARD_SIZE = 15;
let isBlack = true;
let count = 0;  // record the sequence of stones placed
let winIds = [];

function renderBoard(restart = false) {
    if(!restart) {
        // 1. render the background grids
        const frag1 = document.createDocumentFragment();
        for(let i = 0, len = (BOARD_SIZE - 1) ** 2; i < len; i++) {
            frag1.appendChild(document.createElement('div'));
        }
        domBoard.innerHTML = '';
        domBoard.appendChild(frag1);
    }

    // 2. render the stones
    const frag2 = document.createDocumentFragment();
    for(let j = 0; j < BOARD_SIZE; j++) {
        for(let k = 0; k < BOARD_SIZE; k++) {
            const stone = document.createElement('div');
            stone.setAttribute('data-id', `${j + 1},${k + 1}`);
            frag2.appendChild(stone);
        }
    }
    domStones.innerHTML = '';
    domStones.appendChild(frag2);

    // 3. create stone array
    const stoneArr = Array.from({length: BOARD_SIZE}, (_, r) => 
        Array.from({length: BOARD_SIZE}, (_, c) => ({ 
            id: `${r + 1},${c + 1}`, 
            count: 0,
            placed: false,
            isBlack: null,
        })));
    return stoneArr;
}

function convertToRowCol(r_c) {
    const [row, col] = r_c.split(',').map(n => parseInt(n, 10));
    return {row: row - 1, col: col - 1};
}

function matchStone(target, stones) {
    const {row, col} = convertToRowCol(target.dataset.id);
    return stones[row][col];
}

function mouseEnterHandler(stones) {
    return ({target}) => {
        const stone = matchStone(target, stones);
        if (stone.placed) {
            target.classList.remove('semi-black', 'semi-white');
        } else {
            target.classList.add(isBlack ? 'semi-black' : 'semi-white');
        }
    };
}

function mouseLeaveHandler({target}) {
    target.classList.remove('semi-black', 'semi-white');
}

function winningTheGame(stones, {id, isBlack: targetColor}) {
    const {row, col} = convertToRowCol(id),
        validator = {
            topLeft: i => row - i >= 0 && col - i >= 0,
            top: i => row - i >= 0,
            topRight: i => row - i >= 0 && col + i <= 14,
            left: i => col - i >= 0,
            middle: iStone => iStone.placed && iStone.isBlack === targetColor,
            right: i => col + i <= 14,
            bottomLeft: i => row + i <= 14 && col - i >= 0,
            bottom: i => row + i <= 14,
            bottomRight: i => row + i <= 14 && col + i <= 14,
        },
        picker = {
            topLeft: i => stones[row - i][col - i],
            top: i => stones[row - i][col],
            topRight: i => stones[row - i][col + i],
            left: i => stones[row][col - i],
            right: i => stones[row][col + i],
            bottomLeft: i => stones[row + i][col - i],
            bottom: i => stones[row + i][col],
            bottomRight: i => stones[row + i][col + i],
        };

    // 1. horizontal check
    const rowChecker = buildChecker(validator.middle, validator.left, validator.right);
    const rowCount = rowChecker(picker.left, picker.right);
    if(rowCount >= WINNING_COUNT) {
        return true;
    }
    
    // 2. vertical check
    const colChecker = buildChecker(validator.middle, validator.top, validator.bottom);
    const colCount = colChecker(picker.top, picker.bottom);
    if(colCount >= WINNING_COUNT) {
        return true;
    }
    
    // 3. \\ diagonal ((1,1) to (n,n))
    const diag1Checker = buildChecker(validator.middle, validator.topLeft, validator.bottomRight);
    const diag1Count = diag1Checker(picker.topLeft, picker.bottomRight);
    if(diag1Count >= WINNING_COUNT) {
        return true;
    }
    
    // 4. // diagonal ((n,1) to (1,n))
    const diag2Checker = buildChecker(validator.middle, validator.bottomLeft, validator.topRight);
    const diag2Count = diag2Checker(picker.bottomLeft, picker.topRight);
    return diag2Count >= WINNING_COUNT;
}

function buildChecker(coreValidator, leftValidator, rightValidator) {
    return (leftPicker, rightPicker) => {
        winIds.length = 0;
        let validCount = 0;
        // lefthand side
        for(let i = 0; i <= 4; i++) {
            if(leftValidator(i)) {
                const iStone = leftPicker(i);
                if (coreValidator(iStone)) {
                    validCount++;
                    winIds.push(iStone.id);
                } else {
                    break;
                }
            }
        }
        // righthand side
        for(let j = 1; j <= 4; j++) {
            if(rightValidator(j)) {
                const iStone = rightPicker(j);
                if (coreValidator(iStone)) {
                    validCount++;
                    winIds.push(iStone.id);
                } else {
                    break;
                }
            }
        }
        return validCount;
    };
}

function markWinningStones(flattedStones) {
    flattedStones.filter(s => winIds.includes(s.id))
        .map(s => $(`[data-id="${s.id}"]`, domStones))
        .forEach(cell =>  cell.classList.add('win') || 
            cell.classList.remove('active'));
}

function revealSequences(flattedStones) {
    flattedStones.filter(s => s.placed)
        .forEach(s => $(`[data-id="${s.id}"]`, domStones).innerHTML = `<div>${s.count}</div>`);
}

function showResult(flattedStones) {
    markWinningStones(flattedStones);
    revealSequences(flattedStones);
}

function mousedownHandler(stones) {
    return ({target, which}) => {
        target.oncontextmenu = e => e.preventDefault(); // prevent right-click menu
        target.classList.remove('semi-black', 'semi-white'); // reset hover state
        if (which !== 1) return; // only left-click is allowed
        if(winIds.length >= WINNING_COUNT) {
            return congratulate(stones.flat().find(s => s.id === winIds[0]));
        }        
        
        const stone = matchStone(target, stones);
        if (stone.placed) return;

        stone.placed = true;
        stone.isBlack = isBlack;
        stone.count = ++count;
        const prev = $('.active', domStones);
        prev && prev.classList.remove('active');
        target.classList.add('active', 'stone', (isBlack ? 'black' : 'white'));

        if (winningTheGame(stones, stone)) {
            showResult(stones.flat());
            setTimeout(() => congratulate(stone), 0);
            return;
        } else if(stones.flat().every(s => s.placed)) {
            revealSequences(stones.flat());
            setTimeout(() => {
                alert('平局！\n再来一局？');
                setTimeout(() => startGame(true), 0);
            }, 0);
            return;
        }
        winIds.length = 0; // reset winning ids
        isBlack = !isBlack;
    };
}

function congratulate(stone) {
    if (confirm(`恭喜「${stone.isBlack ? '黑棋' : '白棋'}」获胜！\n再来一局？`)) {
        startGame(true);
    }
}

function registerEvents(stones) {
    stones.flat().forEach(s => {
        const cell = $(`[data-id="${s.id}"]`, domStones);
        cell.addEventListener('mousedown', mousedownHandler(stones));
        cell.addEventListener('mouseenter', mouseEnterHandler(stones));
        cell.addEventListener('mouseleave', mouseLeaveHandler);
    });
}

function startGame(restart = false) {
    isBlack = true; // true: black, false: white
    count = 0;
    winIds = [];
    const stones = renderBoard(restart);
    registerEvents(stones);
}

startGame();