function test(n) {
    return (parseInt(n, 16).toString(2)).padStart(8, '0');
}
console.log(test("7B316"));
console.log(test("6F16"));
console.log(test("4B2A16"));
