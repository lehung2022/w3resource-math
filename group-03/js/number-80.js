function test(n) {
    return new Set('' + n).size === 1
}

n = 11
console.log("n = " + n)
console.log("Check the said number is Repdigit: " + test(n));
n = 66
console.log("n = " + n)
console.log("Check the said number is Repdigit: " + test(n));
n = 336
console.log("n = " + n)
console.log("Check the said number is Repdigit: " + test(n));
n = 444
console.log("n = " + n)
console.log("Check the said number is Repdigit: " + test(n));
n = 1151
console.log("n = " + n)
console.log("Check the said number is Repdigit: " + test(n));
