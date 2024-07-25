function frequencySort(nums: number[]): number[] {
    // Wenigste Häufigkeit = Vorne
    // Wenn gleiche Häufigkeit von groß nach klein

    let existing = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(!existing.has(i)) {
            existing.set(i, 1);
        } else {
            let num = existing.get(i)! // ! stellt sicher, dass Wert nicht undefiniert ist
            existing.set(i, num++); 
        }
    }



    return nums; 
};