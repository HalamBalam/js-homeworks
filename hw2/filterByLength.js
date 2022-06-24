function filterByLength(words, minLength, maxLength) {
    return words.filter(word => {
        return word.length >= minLength && word.length <= maxLength;
    })
}

const fruits = ['orange', 'apple', 'banana', ''];
console.log(filterByLength(fruits, 0, 5));