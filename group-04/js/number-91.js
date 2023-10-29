function test(nums) {
    return nums.reduce((b, a) => [...b, ...a], []).reduce((b, a) => !(a % 2) ? b : a + b, 0)
}
nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log("Sum of all odds of the said matrix: " + test(nums));
nums = [
    [-1, -2],
    [-4, -5]
]
console.log("Sum of all odds of the said matrix: " + test(nums));

