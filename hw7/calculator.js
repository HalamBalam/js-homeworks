class Calculator {
    constructor() {
        this.funcs = new Map();
        this.addFunc('+', 'a + b');
        this.addFunc('-', 'a - b');
        this.addFunc('*', 'a * b');
        this.addFunc('/', 'a / b');

        this.reset();
    }

    reset() {
        this.previousOperand = 0;
        this.currentOperand = 0;
        this.currentFunc = null;
        this.hasSeparator = false;
        this.updateDisplayInfo();
    }
    calc() {
        if (!this.currentFunc) {
            return;
        }
        const result = this.currentFunc.func(this.previousOperand, this.currentOperand);
        this.reset();

        this.currentOperand = result;
        this.updateDisplayInfo();
    }
    backspace() {
        if ((!this.currentFunc || this.previousOperand !== 0) && (this.currentOperand > 0)) {
            this.currentOperand = Math.floor(this.currentOperand / 10);
            this.updateDisplayInfo();
        }
    }
    separator() {
        if (!this.currentFunc || this.previousOperand !== 0) {
            this.hasSeparator = true;
            this.updateDisplayInfo();
        }
    }
    number(numString) {
        if (this.currentFunc && this.previousOperand === 0) {
            this.setPreviousOperandToCurrent();
        }
        this.currentOperand = Number(String(this.currentOperand) + this.separatorString() + numString);
        this.updateDisplayInfo();
    }

    separatorString() {
        let result = '';
        if (this.hasSeparator && this.currentOperand === Math.floor(this.currentOperand)) {
            result = '.';
        }
        return result;
    }
    hasFunc(name) {
        return this.funcs.has(name);
    }
    addFunc(name, expression) {
        this.funcs.set(name, new Function('a', 'b', 'return ' + expression));
    }
    setNewFunc(funcName) {
        if (this.currentFunc) {
            this.calc();
        }
        this.currentFunc = { name: funcName, func: this.funcs.get(funcName) };
        this.updateDisplayInfo();
    }
    setPreviousOperandToCurrent() {
        this.previousOperand = this.currentOperand;
        this.currentOperand = 0;
        this.hasSeparator = false;
    }
    updateDisplayInfo() {
        let funcName = '';
        if (this.currentFunc && this.previousOperand === 0) {
            funcName = ' ' + this.currentFunc.name;
        }
        this.displayInfo = String(this.currentOperand) + this.separatorString() + funcName;
    }
}
