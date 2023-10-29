function test(n) {
    if (n < 10) return n;
    data = [];
    for (i = 9; i > 1; i--) {
        // Store all occurrences of current digit in data 
        // if current digit divides n.
        while (n % i === 0) {
            n = n / i;
            data.push(i);
        }
    }

    if (n != 1) return 0;
    result = 0;
    for (i = data.length - 1; i >= 0; i--) {
        result = result * 10 + data[i];
        if (result > Number.MAX_VALUE) return 0;
    }
    return result;
}
n = 100
console.log("n = " + n)
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 120
console.log("n = " + n)
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 16
console.log("n = " + n)
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 129
console.log("n = " + n)
console.log("Smallest number whose digits multiply to the said number: " + test(n));
