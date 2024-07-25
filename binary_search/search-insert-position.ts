/**
 * Searches for the index of a target in a sorted array or returns the position
 * where the target should be inserted.
 *
 * @param nums - A sorted array of unique numbers
 * @param target - The target number to be searched or inserted
 * @returns The index of the target in the array or the insertion position
 */
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