function test(n) {
    return (n & (n - 1)) != 0
}
console.log(test(33));
console.log(test(10));
console.log(test(8));
