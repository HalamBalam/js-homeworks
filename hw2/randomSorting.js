function sortRandom(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5;
    });
}

const arr = [1, 2, 3, 4, 5];

console.log(sortRandom(arr));
console.log(sortRandom(arr));
console.log(sortRandom(arr));