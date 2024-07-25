/**
 * Counts the number of negative numbers in a matrix that is sorted
 * in non-increasing order both row-wise and column-wise.
 * 
 * @param grid A 2D array sorted in non-increasing order.
 * @return The number of negative numbers in the matrix.
 */
function countNegatives(grid: number[][]): number {
    
    let count : number = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let k = 0; k < grid[i].length; k++) {
            if(grid[i][k] < 0) {
                count++; 
            }
        }
    }

    return count; 
};