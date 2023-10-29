const is_Pronic = (n) => {
    if (n === 0) {
        return true
    }
    const sqrt = Math.sqrt(n)
    return sqrt % 1 !== 0 && Math.ceil(sqrt) * Math.floor(sqrt) === n
}

console.log(is_Pronic(6))
console.log(is_Pronic(110))
console.log(is_Pronic(200))
