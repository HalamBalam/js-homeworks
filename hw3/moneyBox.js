const MoneyBox = function () {
    let coin = 0;
    this.addCoin = () => {
        coin++
    }
    this.getAmount = () => {
        return coin
    }
}

const box = new MoneyBox();

console.log(box.getAmount()); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2
