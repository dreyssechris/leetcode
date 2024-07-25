
// number[] = sorted list of distinct numbers
// if nums[x] = target: return x, else return index where x should be
function searchInsert(nums: number[], target: number): number {
 
    let indexStart = 0;
    let indexEnd = nums.length -1;
    let indexMiddle = 0; 

    while(indexStart <= indexEnd) {
        indexMiddle = Math.floor((indexStart + indexEnd) / 2);

        if(nums[indexMiddle] == target) {
            return indexMiddle; 
        } else if(nums[indexMiddle] < target) {
            // search right 
            indexStart = indexMiddle + 1;
        } else {
            // search left
            indexEnd = indexMiddle -1; 
        }
       
    } 

    return indexStart; 
};