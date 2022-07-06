class Figure {
    constructor(color) {
        this.color = color;
        this.cell = undefined;
    }
    availableMoves() {};
    static availableMoves(cell) {};
}

class Pawn extends Figure {
    constructor(color) {
        super(color);
        this.currentClass = Pawn;
    }
    transform(newClass) {
        if (newClass !== King) {
            this.currentClass = newClass;
        }
    }
    availableMoves() {
        return this.currentClass.availableMoves(this.cell);
    };
    static availableMoves(cell) {};
}

class Rook extends Figure {
    availableMoves() {
        return Rook.availableMoves(this.cell);
    }
    static availableMoves(cell) {};
}

class Bishop extends Figure {
    availableMoves() {
        return Bishop.availableMoves(this.cell);
    }
    static availableMoves(cell) {};
}

class Knight extends Figure {
    availableMoves() {
        return Knight.availableMoves(this.cell);
    }
    static availableMoves(cell) {};
}

class King extends Figure {
    availableMoves() {
        return King.availableMoves(this.cell);
    }
    static availableMoves(cell) {};
}

class Queen extends Figure {
    availableMoves() {
        return Queen.availableMoves(this.cell);
    }
    static availableMoves(cell) {};
}


class Board {
    constructor() {
        this.cells = [];
        for (let i = 0; i < 8; i++) {
            this.cells.push([]);
            for (let j = 0; j < 8; j++) {
                this.cells[i].push(undefined);
            }
        }
    }
    get(cell) {
        let row = Number(cell[1]) - 1;
        let col = 'abcdefgh'.indexOf(cell[0].toLowerCase());
        return this.cells[row][col];
    }
    set(cell, figure) {
        let row = Number(cell[1]) - 1;
        let col = 'abcdefgh'.indexOf(cell[0].toLowerCase());
        this.cells[row][col] = figure;

        if (figure) {
            figure.cell = cell;
        }
    }
}

class Game {
    constructor(board) {
        this.board = board;
        this.currentPlayer = 'white';
        this.winner = undefined;
    }
    lostFigures = [];
    history = [];
    move(startCell, endCell) {
        if (this.winner) {
            return;
        }
        let enemyFigure = this.board.get(endCell);
        if (enemyFigure) {
            this.lostFigures.push(enemyFigure);
            enemyFigure.cell = undefined;
        }
        let currentFigure = this.board.get(startCell);
        this.board.set(startCell, undefined);
        this.board.set(endCell, currentFigure);
        this.history.push(startCell + ':' + endCell);

        if (Math.random() < 0.05) {
            this.winner = this.currentPlayer;
        } else {
            this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
        }
    }
    movesFromStart() {
        return this.history.length;
    }
}

const board = new Board();
const game = new Game(board);

const whitePawn = new Pawn('white');
const blackRook = new Rook('black');

board.set('e2', whitePawn);
board.set('h8', blackRook);

game.move('e2', 'e4');
game.move('h8', 'a8');
game.move('e4', 'e5');
game.move('a8', 'a1');
game.move('e5', 'e6');
game.move('a1', 'f1');
game.move('e6', 'e7');
game.move('f1', 'f8');
game.move('e7', 'f8');

whitePawn.transform(Queen);

if (game.winner) {
    console.log('Игра окончена. Победитель: ' + game.winner);
}
console.log('Ходов с начала игры: ' + game.movesFromStart());
