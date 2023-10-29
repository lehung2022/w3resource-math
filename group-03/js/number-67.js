function sumOf_Geometric_Progression(first_Term, common_Ratio, num_Of_Terms) {
    if (!Number.isFinite(num_Of_Terms)) {
        /*
          If the number of Terms is Infinity, the common ratio needs to be less than 1 to be a convergent geometric progression
          Article on Convergent Series: https://en.wikipedia.org/wiki/Convergent_series
        */
        if (Math.abs(common_Ratio) < 1) return first_Term / (1 - common_Ratio)
        throw new Error('The geometric progression is diverging, and its sum cannot be calculated')
    }
    if (common_Ratio === 1) return first_Term * num_Of_Terms
    return (first_Term * (Math.pow(common_Ratio, num_Of_Terms) - 1)) / (common_Ratio - 1)
}
console.log(sumOf_Geometric_Progression(100, 2.5, 5))
