function test(n) {
    if (n === 0) {
        return 1;
    }
    var result = 10;
    var temp = 9;
    for (var i = 1; i < n; i++) {
        temp *= 10 - i
        result += temp
    }
    return result;
}
n = 1
console.log("Range: " + n + " to 10")
console.log("Numbers with unique digits in the said range: " + test(n));
n = 2
console.log("Range: " + n + " to 10")
console.log("Numbers with unique digits in the said range: " + test(n));
