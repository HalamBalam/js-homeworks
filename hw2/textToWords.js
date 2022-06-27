function textToWords(text) {
    let words = text.split(' ');
    return words.map(item => {
        let word = item.replaceAll(/[^A-Za-zА-Яа-я\d]/ig, "");
        let isCapitalized = word.length === 0 ? false : word[0] === word[0].toUpperCase()
        return { word: word, length: word.length, isCapitalized: isCapitalized }
    })
}

console.log(textToWords('Внимание! Каждую задачу нужно выполнить в отдельном файле, а все задание - в отдельной ветке.'));