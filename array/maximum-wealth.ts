function maximumWealth(accounts: number[][]): number {
    let mostMoney: number = -99999;
    let money: number = 0; 

    for(let i = 0; i < accounts.length; i++) {
        for(let k = 0; k < accounts[i].length; k++) {
            money += accounts[i][k]; 
            if (money > mostMoney) mostMoney = money; 
             
        }
        money = 0;
    }

    return mostMoney; 
};

// alt: 
function maximumWealth1(accounts: number[][]): number {
    let maxWealth = 0;
    for (const banks of accounts) {
        let wealth = 0;
        for (const amount of banks) {
            wealth += amount;
        }
        if (wealth > maxWealth) {
            maxWealth = wealth;
        }
    }
    return maxWealth;
};