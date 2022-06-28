function cache() {
    let arr = []
    return (a, n) => {
        let fromCache = true;
        if (!(arr[a] && arr[a][n])) {
            arr[a] = []
            arr[a][n] = Math.pow(a, n)
            fromCache = false;
        }
        return { value: arr[a][n], fromCache }
    }
}

const calculate = cache();

calculate(3, 3); // { value: 27, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: true}
