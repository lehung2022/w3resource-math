function test(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
}

n = 27
console.log("Number n = " + n)
console.log("Check the said number is power of three or not? " + test(n));
n = 9
console.log("Number n = " + n)
console.log("Check the said number is power of three or not? " + test(n));
n = 36
console.log("Number n = " + n)
console.log("Check the said number is power of three or not? " + test(n));
