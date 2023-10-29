function test(n) {
    var x = 0,
        y = 1;
    while (n-- > 0) {
        y = x + y;
        x = y - x;
    }
    return b;
}

n = 2
console.log("Number of stairs = " + n)
console.log("Number of ways to climb the said number of stairs: " + test(n));
n = 3
console.log("Number of stairs = " + n)
console.log("Number of ways to climb the said number of stairs: " + test(n));
