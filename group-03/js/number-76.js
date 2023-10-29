function test1(a, b) {
    do {
        let temp = (~a) & b;
        a = a ^ b;
        b = temp << 1;
    } while (b != 0)
    return a;
}

console.log(test1(200, 100));
console.log(test1(200, 300));
console.log(test1(-200, -300));
console.log(test1(200, 200));
