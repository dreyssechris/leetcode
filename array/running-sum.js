// 1480. Running Sum of 1d Array
var sumPls = [1, 2, 3, 4, 5, 6, 7];
function runningSum(nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}
;
sumPls = runningSum(sumPls);
console.log(sumPls);
