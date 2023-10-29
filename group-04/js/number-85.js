function test(nums) {
    return nums.reduce((x, y, i) => x + y[i], 0);
}
nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log("Sum of the main diagonal elements of the said square matrix: " + test(nums));
nums = [
    [-1, -2],
    [-4, -5]
]
console.log("Sum of the main diagonal elements of the said square matrix: " + test(nums));
