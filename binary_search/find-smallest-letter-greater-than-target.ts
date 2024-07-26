/**
 * Finds the next lexicographical character in a sorted array of letters that is greater than the target.
 * If no such character exists, returns the first character in the array.
 * 
 * Characters are just UNICODE integers, which can be compared
 *
 * @param letters - Sorted array of characters
 * @param target - Target character
 * @returns Next character greater than target, or first character if not found
 */
function nextGreatestLetter(letters: string[], target: string): string {
    
    let indexStart = 0;
    let indexEnd = letters.length -1;
    let indexMiddle = 0; 

    while(indexStart <= indexEnd) {
        let indexMiddle = Math.floor((indexStart + indexEnd) / 2);

        // next character greater than target
        if(letters[indexMiddle] == target) {
            break;
        } else if(letters[indexMiddle] < target) {
            // search right 
            indexStart = indexMiddle + 1;
        } else {
            // search left
            indexEnd = indexMiddle -1; 
        }
       
    }

    for(indexMiddle; indexMiddle < letters.length; indexMiddle++) {
        if(letters[indexMiddle] > target) return letters[indexMiddle]; 
    }

    return letters[0];
};