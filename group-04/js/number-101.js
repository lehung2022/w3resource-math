function test(num) {
    result = [1]
    x2 = x3 = x5 = 0
    while (result.length < n) {
        m2 = result[x2] * 2
        m3 = result[x3] * 3
        m5 = result[x5] * 5
        temp = Math.min(m2, m3, m5)
        if (temp === m2) {
            x2++
        }
        if (temp === m3) {
            x3++
        }
        if (temp === m5) {
            x5++
        }
        result.push(temp)
    }
    return result[n - 1]
};
n = 4
console.log("n = " + n)
console.log("nth Ugly number is " + test(n));
n = 10
console.log("n = " + n)
console.log("nth Ugly number is " + test(n));
