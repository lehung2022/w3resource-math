function test(num) {
    if (n < 1)
        return false;
    var ctr = 0;
    for (var i = 1; i <= n; i *= 10) {
        var d = i * 10;
        ctr += parseInt(n / d) * i +
            Math.min(Math.max(n % d - i + 1, 0), i);
    }
    return ctr;
}
n = 11
console.log("n = " + n)
console.log("Total number of 1s from 1 to n: " + test(n));
n = 305
console.log("n = " + n)
console.log("Total number of 1s from 1 to n: " + test(n));
n = 0
console.log("n = " + n)
console.log("Total number of 1s from 1 to n: " + test(n));
