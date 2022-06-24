function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log(arraysEqual(arr1, arr2));


arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3, 4, 5, 6];
console.log(arraysEqual(arr1, arr2));

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, -3, 4, 5];
console.log(arraysEqual(arr1, arr2));