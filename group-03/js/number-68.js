function sum_Of_Digits(n) {
    if (n < 0) n = -n
    let result = 0

    while (n > 0) {
        result += n % 10
        n = Math.floor(n / 10)
    }

    return result
}
console.log(sum_Of_Digits(6098))
console.log(sum_Of_Digits(-501))
console.log(sum_Of_Digits(2546))
