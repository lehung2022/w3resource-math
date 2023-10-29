const RPN_calculation = (math_expr) => {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => y / x
    }
    const expr_part = math_expr.split(' ')
    const data = []

    expr_part.forEach((expr_part) => {
        const operator = operators[expr_part]
        if (typeof operator === 'function') {
            const x = data.pop()
            const y = data.pop()
            const result = operator(x, y)
            data.push(result)
        }
        else {
            data.push(parseFloat(expr_part))
        }
    })
    return data.pop()
}
console.log(RPN_calculation("5 8 *"))
console.log(RPN_calculation("5 6 + 2 *"))
console.log(RPN_calculation("5 3 4 * +"))
