function test(n) {
    if (n < 1) {
        return false;
    }

    while (n % 4 === 0) {
        n = n / 4;
    }
    return n === 1;
}
n = 16
console.log("Number n = " + n)
console.log("Check the said number is power of four or not? " + test(n));
n = 4096
console.log("Number n = " + n)
console.log("Check the said number is power of four or not? " + test(n));
n = 36
console.log("Number n = " + n)
console.log("Check the said number is power of four or not? " + test(n));
