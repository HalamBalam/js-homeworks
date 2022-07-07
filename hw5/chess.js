class Figure {
    constructor(color) {
        this.color = color;
    }
    availableMoves() {};
}

class Pawn extends Figure {
    constructor(color) {
        super(color);
        this.transformable = true;
    }
    availableMoves() {};
}

class Rook extends Figure {
    availableMoves() {}
}

class Bishop extends Figure {
    availableMoves() {}
}

class Knight extends Figure {
    availableMoves() {}
}

class King extends Figure {
    availableMoves() {}
}

class Queen extends Figure {
    availableMoves() {}
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
    getFigure(cell) {
        const row = Number(cell[1]) - 1;
        const col = 'abcdefgh'.indexOf(cell[0].toLowerCase());
        return this.cells[row][col];
    }
    setFigure(cell, figure) {
        const row = Number(cell[1]) - 1;
        const col = 'abcdefgh'.indexOf(cell[0].toLowerCase());
        this.cells[row][col] = figure;
    }
    getCell(figure) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            const ind = row.indexOf(figure);
            if (ind >= 0) {
                return 'abcdefgh'[ind] + String(i + 1);
            }
        }
    }
    transform(figure, newClass) {
        if (figure.transformable && newClass !== King) {
            const newFigure = new newClass(figure.color);
            this.setFigure(this.getCell(figure), newFigure);
            return newFigure;
        }
    }
}

class Game {
    constructor(board) {
        this.board = board;
        this.currentPlayer = 'white';
        this.status = 'active';
    }
    lostFigures = [];
    history = [];
    move(startCell, endCell) {
        if (this.status !== 'active') {
            return;
        }
        const enemyFigure = this.board.getFigure(endCell);
        if (enemyFigure) {
            this.lostFigures.push(enemyFigure);
        }
        const currentFigure = this.board.getFigure(startCell);
        this.board.setFigure(startCell, undefined);
        this.board.setFigure(endCell, currentFigure);
        this.history.push(startCell + ':' + endCell);

        if (Math.random() < 0.05) {
            this.status = this.currentPlayer + ' wins';
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

board.setFigure('e2', whitePawn);
board.setFigure('h8', blackRook);

game.move('e2', 'e4');
game.move('h8', 'a8');
game.move('e4', 'e5');
game.move('a8', 'a1');
game.move('e5', 'e6');
game.move('a1', 'f1');
game.move('e6', 'e7');
game.move('f1', 'f8');
game.move('e7', 'f8');

const whiteQueen = board.transform(whitePawn, Queen);

if (game.status !== 'active') {
    console.log('Игра окончена. Результат: ' + game.status);
}
console.log('Ходов с начала игры: ' + game.movesFromStart());
console.log(whiteQueen);
