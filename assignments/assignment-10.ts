function maximumProfit(price: number []): number{

    let buyStock: number = price[0];
    
    for(let i:number = 0; i < price.length; i++){
        if(price[i] < buyStock){
            buyStock = price[i];
        }
       
    }
    let dayOfBuyStock: number = price.indexOf(buyStock);
    let sellStock: number = price[dayOfBuyStock];
    for(let i:number = dayOfBuyStock; i < price.length; i++){
        if(price[i] > sellStock){
            sellStock = price[i];
        }
       
    }
   
    return sellStock - buyStock;
    
}

console.log("Profit is: ", maximumProfit([7,6,4,3,1,2,8,5,6]));