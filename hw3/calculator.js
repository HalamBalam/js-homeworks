function Calc() {
    const ops = [];
    let opHistory = [];

    this.addOperation = (operation, func) => {
        let op = ops.find((item) => item.operation === operation);
        if (!op) {
            ops.push({ operation, func })
        }
    }

    this.addOperation('+', (a, b) => a + b);
    this.addOperation('-', (a, b) => a - b);

    this.operation = (str) => {
        const arr = str.split(' ');
        if (arr.length !== 3) {
            return NaN
        }
        const a = Number(arr[0]);
        const b = Number(arr[2]);
        opHistory.push({ operation: arr[1], operands: [a, b] });

        const op = ops.find((item) => item.operation === arr[1]);
        if (!op) {
            return a
        }
        return op.func(a, b);
    }

    this.history = () => {
        return opHistory
    }

    this.clearHistory = () => {
        opHistory = []
    }
}

const calculator = new Calc();

calculator.operation('31 + 32'); // 63
calculator.operation('10 * 2'); // 10
calculator.addOperation('/', (a, b) => a / b);
calculator.operation('10 / 2') ; // 5

calculator.history();
calculator.clearHistory();
calculator.history();
