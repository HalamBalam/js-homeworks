class CalculatorUI {
    constructor(display, buttons, classForButton) {
        this.calc = new Calculator();
        this.display = display;
        this.buttons = buttons;
        this.classForButton = classForButton;
    }

    init() {
        this.buttons.addEventListener('click', (event) => {
            this.buttonPress(event.target.dataset['field']);
        });
        document.addEventListener('keypress', (event) => {
            this.buttonPress(event.key);
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                this.buttonPress(event.key);
            }
        })
    }
    addNewButton() {
        const name = prompt('Введите имя операции (1 симв.)');
        if (!name) {
            return;
        }
        const expression = prompt('Введите формулу для расчета значения (операнды a и b)', 'a + b');
        if (!expression) {
            return;
        }
        const div = document.createElement('div');
        div.className = this.classForButton;
        div.textContent = name;
        div.dataset['field'] = name;
        this.buttons.append(div);

        this.calc.addFunc(name, expression);
    }
    buttonPress(buttonValue) {
        switch (buttonValue) {
            case 'c':
            case 'C':
                this.calc.reset();
                break;
            case 'Enter':
            case '=':
                this.calc.calc();
                break;
            case 'Backspace':
            case '←':
                this.calc.backspace();
                break;
            case '.':
                this.calc.separator();
                break;
            case 'new':
                this.addNewButton();
                break;
            default:
                if (this.calc.hasFunc(buttonValue)) {
                    this.calc.setNewFunc(buttonValue);
                    break;
                } else if (!Number.isInteger(Number(buttonValue))) {
                    return;
                }
                this.calc.number(buttonValue);
        }

        this.refreshDisplay();
    }
    refreshDisplay() {
        this.display.textContent = this.calc.displayInfo;
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');

const calcUI = new CalculatorUI(display, buttons, 'button');
calcUI.init();
