class Calculator {
    constructor() {
        this.funcs = new Map();
        this.addFunc('+', (a, b) => a + b);
        this.addFunc('-', (a, b) => a - b);
        this.addFunc('*', (a, b) => a * b);
        this.addFunc('/', (a, b) => a / b);

        this.init();
        this.displayInfo = String(this.currentOperand);
    }

    init() {
        this.previousOperand = 0;
        this.currentOperand = 0;
        this.currentFunc = null;
        this.separator = false;
    }
    calc(nextFunc = null) {
        if (this.currentFunc) {
            this.currentOperand = this.currentFunc.func(this.previousOperand, this.currentOperand);
            this.previousOperand = 0;
        }
        this.currentFunc = nextFunc;
    }
    backspace() {
        if ((!this.currentFunc || this.previousOperand !== 0) && (this.currentOperand > 0)) {
            this.currentOperand = Math.floor(this.currentOperand / 10);
        }
    }
    separatorPress() {
        if (!this.currentFunc || this.previousOperand !== 0) {
            this.separator = true;
        }
    }
    separatorString() {
        let result = '';
        if (this.separator && this.currentOperand === Math.floor(this.currentOperand)) {
            result = '.';
        }
        return result;
    }
    addFunc(name, func) {
        this.funcs.set(name, func);
    }
    buttonPress(buttonValue) {
        switch (buttonValue) {
            case 'c':
            case 'C':
                this.init();
                break;
            case 'Enter':
            case '=':
                this.calc();
                break;
            case 'Backspace':
            case '←':
                this.backspace();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.calc({ name: buttonValue, func: this.funcs.get(buttonValue) });
                break;
            case '.':
                this.separatorPress();
                break;
            default:
                if (this.funcs.get(buttonValue)) {
                    this.calc({ name: buttonValue, func: this.funcs.get(buttonValue) });
                    break;
                } else if (!Number.isInteger(Number(buttonValue))) {
                    return;
                }
                if (this.currentFunc && this.previousOperand === 0) {
                    this.previousOperand = this.currentOperand;
                    this.currentOperand = 0;
                    this.separator = false;
                }
                this.currentOperand = Number(String(this.currentOperand) + this.separatorString() + buttonValue);
        }
        let funcName = '';
        if (this.currentFunc && this.previousOperand === 0) {
            funcName = this.currentFunc.name;
        }
        this.displayInfo = String(this.currentOperand) + this.separatorString() + funcName;
    }
}
