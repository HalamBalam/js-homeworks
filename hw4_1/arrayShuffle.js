const arr1 = [1, 2, 3, 4, 5];

Object.getPrototypeOf(arr1).shuffle = function () {
    this.sort(() => {
        return Math.random() - 0.5; })
}

arr1.shuffle();
console.log(arr1);

const arr2 = [78, 11, 4, 4, 18];
arr2.shuffle();
console.log(arr2);
