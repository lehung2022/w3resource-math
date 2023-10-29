function test(n) {
    if (n <= 1) return false;
    max_val = Math.floor(Math.sqrt(n - 1));
    while (max_val >= 0) {
        temp = Math.sqrt(n - max_val * max_val);
        if (!(temp % 1)) {
            return true;
        };
        max_val -= 1;
    };
    return false;
}

n = 2
console.log("n = " + n)
console.log("Check sum of two square integers is equal to said integer: " + test(n));
n = 5
console.log("n = " + n)
console.log("Check sum of two square integers is equal to said integer: " + test(n));
n = 13
console.log("n = " + n)
console.log("Check sum of two square integers is equal to said integer: " + test(n));
n = 15
console.log("n = " + n)
console.log("Check sum of two square integers is equal to said integer: " + test(n));
