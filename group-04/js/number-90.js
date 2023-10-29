function test(n) {
    n = n.toString();
    var total = 0;
    for (var i = 0; i < n.length; i++) {
        total += parseInt(n[i]);
    }
    n = parseInt(n);
    if (n % total === 0) {
        return true;
    }
    return false;
}
n = 113
console.log("n = " + n)
console.log("Test the said number is Harshad Number or not! " + test(n))
n = 171
console.log("n = " + n)
console.log("Test the said number is Harshad Number or not! " + test(n))
n = 200
console.log("n = " + n)
console.log("Test the said number is Harshad Number or not! " + test(n))
