function reverse(word) {
    let result = '';
    for (let i = word.length; i > 0; i--) {
        result += word[i - 1];
    }
    return result;
}