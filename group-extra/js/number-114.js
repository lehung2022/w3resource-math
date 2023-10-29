function test(n) {
    i = n;
    num = i;
    flag = true;
    while (num > 0) {

        mod = num % 10;

        if (i % mod !== 0) {
            flag = false;
        }

        num = Math.floor(num / 10)
    }
    return flag;
}
n = 48
console.log("n = " + n)
console.log("Check the said number is self-dividing or not: " + test(n));
n = 22
console.log("n = " + n)
console.log("Check the said number is self-dividing or not: " + test(n));
n = 63
console.log("n = " + n)
console.log("Check the said number is self-dividing or not: " + test(n));
