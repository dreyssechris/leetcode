

// nums: asc sortiert
// target in nums finden
// if target -> return index, else return -1
// 0(log n)  -> Algorithm. braucht für größere Mengen proportional weniger zusätzliche Zeit
//           -> z.B. binary search -> Anzahl zu durchsuchender Elemente bei jedem Schritt halbiert 
//
// Constraints:

// 1 <= nums.length <= 10^4
// -104 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.

function search(nums: number[], target: number): number {

    let indexStart = 0;
    let indexEnd = nums.length -1;

    while(indexStart <= indexEnd) {
        let indexMiddle = Math.floor((indexStart + indexEnd) / 2);

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
    
    return -1; 
};