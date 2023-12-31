function find_lucas_number(index) {
    // index should not be a negative number
    if (index >= 0) {
        // index sould be an integer
        if (Math.floor(index) !== index) throw new TypeError('Index cannot be a Decimal')
        let x = 2
        let y = 1
        for (let i = 0; i < index; i++) {
            const temp = x + y
            x = y
            y = temp
        }
        return x
    }
}
console.log(find_lucas_number(0))
console.log(find_lucas_number(4))
console.log(find_lucas_number(7))
