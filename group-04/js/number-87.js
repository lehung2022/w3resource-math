function test(n) {
    return Number.isInteger(Math.sqrt(`${n}${n + 1}`))
}
n = 27
console.log("Original string: " + n);
console.log("Check the said number is Sastry number or not: " + test(n))
n = 328
console.log("Original string: " + n);
console.log("Check the said number is Sastry number or not: " + test(n))
n = 28027683
console.log("Original string: " + n);
console.log("Check the said number is Sastry number or not: " + test(n))
