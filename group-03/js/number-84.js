function test(nums) {
    return nums.filter((el) => el >= 0)
        .sort((x, y) => x - y)
        .slice(-2)
        .reduce((acc, el) => acc + el);
}
nums = [1, 2, 6, 3, 4, 5, 6, 7]
console.log("nums = " + nums)
console.log("Sum of the two highest numbers of the said array: " + test(nums));
nums = [2, 3, 4, 5]
console.log("nums = " + nums)
console.log("Sum of the two highest numbers of the said array: " + test(nums));
