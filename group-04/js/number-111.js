function test(m, n, k) {
    if ((k < 1) || (k > m * n))
        return false;
    var s = 1, p = n * m
    while (s <= p) {
        var mid = s + Math.floor((p - s) / 2)

        var t = 0
        for (i = 1; i <= m; i++) {
            t += Math.min(Math.floor(mid / i), n)
        }

        if (t >= k) {
            p = mid - 1
        } else {
            s = mid + 1
        }
    }
    return s
}

m = 3
n = 3
k = 8
console.log("m = " + m + " : n = " + n + ", k = " + k)
console.log("kth smallest element in m x n multiplication table: " + test(m, n, k));
m = 2
n = 3
k = 4
console.log("m = " + m + " : n = " + n + ", k = " + k)
console.log("kth smallest element in m x n multiplication table: " + test(m, n, k));
