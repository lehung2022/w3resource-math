function test(n) {
    ctr = 0
    i = 5
    while (n / i >= 1) {
        ctr += Math.floor(n / i)
        i *= 5
    }
    return ctr;
};
n = 4
console.log("n = " + n)
console.log("Number of trailing zeroes in the said factorial: " + test(n));
n = 9
console.log("n = " + n)
console.log("Number of trailing zeroes in the said factorial: " + test(n));
n = 10
console.log("n = " + n)
console.log("Number of trailing zeroes in the said factorial: " + test(n));
n = 23
console.log("n = " + n)
console.log("Number of trailing zeroes in the said factorial: " + test(n));
n = 35
console.log("n = " + n)
console.log("Number of trailing zeroes in the said factorial: " + test(n));
