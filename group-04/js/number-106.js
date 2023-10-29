function test(n) {
    var maps = []
    maps[0] = 0
    maps[1] = 1
    maps[2] = 2
    maps[3] = 3

    for (var i = 3; i <= n; i++) {
        maps[i] = maps[i - 1] + 1
        for (var j = 1; j * j <= i; j++) {
            maps[i] = Math.min(maps[i], maps[i - j * j] + 1)
        }
    }
    return maps[n]
}

n = 12
console.log("Number n = " + n)
console.log("Least number of perfect square that sums upto n: " + test(n));
n = 13
console.log("Number n = " + n)
console.log("Least number of perfect square that sums upto n: " + test(n));
n = 63
console.log("Number n = " + n)
console.log("Least number of perfect square that sums upto n: " + test(n));
