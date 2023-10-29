function test(n) {
    map = [5, 3, 2];
    for (let i = 0; i < map.length && n > 1; i++) {
        while (n % map[i] === 0) n /= map[i];
    }
    return n === 1;
};
n = 12
console.log("n = " + n)
console.log("Check the said number is an ugly number? " + test(n));
n = 18
console.log("Original text: " + n)
console.log("Check the said number is an ugly number? " + test(n));
n = 19
console.log("Original text: " + n)
console.log("Check the said number is an ugly number? " + test(n));
