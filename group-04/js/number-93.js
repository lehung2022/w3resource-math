function test(nums) {
    return nums.every((item, i) => item > nums[i + 1] || item === nums[nums.length - 1])
}
nums = [1, 3, 4, 7, 9, 10, 11]
console.log("n = " + nums)
console.log(" process: " + test(nums));
nums = [11, 10, 9, 7, 4, 3, 2, 0]
console.log("n = " + nums)
console.log(" process: " + test(nums));
nums = [1, 0, -2, -3, -12]
console.log("n = " + nums)
console.log(" process: " + test(nums))
