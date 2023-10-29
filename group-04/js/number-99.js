function test(n) {
    if (isNaN(n) || n === 0) return 0;
    total = n;
    while (n >= 10) {
        total = 0;
        while (n != 0) {
            total += Math.floor(n % 10);
            n = Math.floor(n / 10);
        }
        n = total;
    }

    return total;
};
n = 49
console.log("n = " + n)
console.log("Add digits of the said number until there is only one digit: " + test(n));
n = 9
console.log("Original text: " + n)
console.log("Add digits of the said number until there is only one digit: " + test(n));
