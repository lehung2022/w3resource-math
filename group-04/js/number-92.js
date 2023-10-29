function test(n) {
    ctr = 0
    while (n >= 3) {
        n = n ** (1. / 3.)
        ctr = ctr + 1
    }
    if (n < 0)
        return 'Not a positive number!';
    else
        return ctr;
}
console.log("Iterated Cube Root:");
n = 27
console.log("n = " + n)
console.log("Number of steps to complete the said process: " + test(n));
n = 10000
console.log("n = " + n)
console.log("Number of steps to complete the said process: " + test(n));
n = -100
console.log("n = " + n)
console.log("Number of steps to complete the said process: " + test(n));
