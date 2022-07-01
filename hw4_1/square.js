const Rectangle = function (a, b) {
    this.a = a;
    this.b = b;

    this.square = function () {
        return this.a * this.b;
    }

    this.perimeter = function() {
        return (this.a + this.b) * 2;
    }
}

const Square = function (a) {
    this.a = a;
    this.b = a;
}

Square.prototype = new Rectangle();

const rect = new Rectangle(2, 3);
console.log(rect.square());
console.log(rect.perimeter());

const sq = new Square(3);
console.log(sq.square());
console.log(sq.perimeter());
