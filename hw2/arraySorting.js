function sortDesc(numbers) {
    return numbers.sort((a, b) => {
        return b - a;
    });
}

const numbers = [-20, -10, 0, 10, 20, 30];
console.log(sortDesc(numbers));