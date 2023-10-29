function test(n) {
    let arr_str = String(Math.abs(n)).split('');
    return arr_str.reduce((a, b) => a + Number(b), 0) / arr_str.length;
}

n = 11
console.log("n = " + n)
console.log("Mean of all digits of the said number: " + test(n));
n = 66
console.log("n = " + n)
console.log("Mean of all digits of the said number: " + test(n));
n = 336
console.log("n = " + n)
console.log("Mean of all digits of the said number: " + test(n));
n = 444
console.log("n = " + n)
console.log("Mean of all digits of the said number: " + test(n));
n = 1151
console.log("n = " + n)
console.log("Mean of all digits of the said number: " + test(n));
