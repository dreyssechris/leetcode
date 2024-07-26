var NUMS = [5, 3, 23, 26, 56, 21, 3, 42, 6, 1];
function sortArray(nums) {
    var changes = true;
    var temp = 0;
    while (changes) {
        changes = false;
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                temp = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = temp;
                changes = true;
            }
        }
    }
    return nums;
}
;
var sortedNums = sortArray(NUMS);
console.log(sortedNums);
