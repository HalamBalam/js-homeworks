const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');

const funcs = new Map();
funcs.set('+', (a, b) => a + b);
funcs.set('-', (a, b) => a - b);
funcs.set('*', (a, b) => a * b);
funcs.set('/', (a, b) => a / b);

let previousOperand = 0;
let currentOperand = 0;
let currentFunc = null;
let separator = false;

display.textContent = String(currentOperand);

function performAction(buttonValue) {
    switch (buttonValue) {
        case 'c':
        case 'C':
            previousOperand = 0;
            currentOperand = 0;
            currentFunc = null;
            separator = false;
            break;
        case 'Enter':
        case '=':
            calc();
            break;
        case 'Backspace':
        case '←':
            if ((!currentFunc || previousOperand !== 0) && (currentOperand > 0)) {
                currentOperand = Math.floor(currentOperand / 10);
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            calc();
            currentFunc = { name: buttonValue, func: funcs.get(buttonValue) };
            break;
        case '.':
            if (!currentFunc || previousOperand !== 0) {
                separator = true;
            }
            break;
        case 'new':
            const name = prompt('Введите имя операции (1 симв.)');
            if (!name) {
                return;
            }
            const func = prompt('Введите формулу для расчета значения (операнды a и b)', 'a + b');
            if (!func) {
                return;
            }
            const div = document.createElement('div');
            div.className = 'button';
            div.textContent = name;
            buttons.append(div);

            funcs.set(name, new Function('a', 'b', 'return ' + func));
            break;
        default:
            if (funcs.get(buttonValue)) {
                calc();
                currentFunc = { name: buttonValue, func: funcs.get(buttonValue) };
                break;
            } else if (!Number.isInteger(Number(buttonValue))) {
                return;
            }
            if (currentFunc && previousOperand === 0) {
                previousOperand = currentOperand;
                currentOperand = 0;
                separator = false;
            }
            currentOperand = Number(String(currentOperand) + strSeparator() + buttonValue);
    }

    let funcName = '';
    if (currentFunc && previousOperand === 0) {
        funcName = currentFunc.name;
    }
    display.textContent = String(currentOperand) + strSeparator() + funcName;
}

function calc() {
    if (currentFunc) {
        currentOperand = currentFunc.func(previousOperand, currentOperand);
        previousOperand = 0;
        currentFunc = null;
    }
}

function strSeparator() {
    let result = '';
    if (separator && currentOperand === Math.floor(currentOperand)) {
        result = '.';
    }
    return result;
}


buttons.addEventListener('click', (event) => {
    performAction(event.target.textContent);
});

document.addEventListener('keypress', (event) => {
    performAction(event.key);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        performAction(event.key);
    }
})
