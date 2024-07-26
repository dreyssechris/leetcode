/* const NUMS: number[] = [5,3,23,26,56,21,3,42,6,1]; 
// Shift + Alt + A -> comments all out

function sortArray(nums: number[]): number[] {

    let changes: Boolean = true;
    let temp: number = 0; 

    while(changes) {
        changes = false;
        for(let i = 0; i < nums.length -1; i++) {
            if(nums[i] > nums[i+1]) {
                temp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = temp;
                changes = true; 
            }
        }
    }

    return nums; 
};

let sortedNums: number[] = sortArray(NUMS); 

console.log(sortedNums);  
*/
/*
function frequencySort(nums: number[]): number[] {
    let array = []
    let res = []
    let m = new Map()

    for(let i = 0;  i < nums.length;i++){
        m.set(nums[i], (m.get(nums[i]) || 0) + 1)
    }

    for (let [key, value] of m) {
        array.push([key,value])
    }

    array = array.sort((a,b) => {
        if(a[1] === b[1]) return b[0] - a[0] 
        return a[1] - b[1]
    })
     
    for(let i = 0;  i < array.length;i++){
        for(let j = 0;  j < array[i][1];j++){
            res.push(array[i][0])
        }
    }

    return res;
}; */