const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');

const calc = new Calculator();
display.textContent = calc.displayInfo;

function performAction(buttonValue) {
    switch (buttonValue) {
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

            calc.addFunc(name, new Function('a', 'b', 'return ' + func))
            break;
        default:
            calc.buttonPress(buttonValue);
    }

    display.textContent = calc.displayInfo;
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
