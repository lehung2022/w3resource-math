function test(n) {
    s = 1;
    e = 26;
    result = "";
    while ((n -= s) >= 0) {
        result = String.fromCharCode(parseInt((n % e) / s) + 65) + result;
        s = e;
        e *= 26;
    }
    return result;
}
n = 4
console.log("n = " + n)
console.log("Excel column title related with the said column number: " + test(n));
n = 27
console.log("n = " + n)
console.log("Excel column title related with the said column number: " + test(n));
n = 151
console.log("n = " + n)
console.log("Excel column title related with the said column number: " + test(n));
