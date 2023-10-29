function test(n) {
    return +[...String(n)].map(x => x * x * x).join('');
}
n = 11
console.log("n = " + n)
console.log("Multiply every digit of the said number three times: " + test(n));
n = 66
console.log("n = " + n)
console.log("Multiply every digit of the said number three times: " + test(n));
n = 336
console.log("n = " + n)
console.log("Multiply every digit of the said number three times: " + test(n));
n = 444
console.log("n = " + n)
console.log("Multiply every digit of the said number three times: " + test(n));
n = 1151
console.log("n = " + n)
console.log("Multiply every digit of the said number three times: " + test(n));
