let transactions: any[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditTransactions:number = 0;
let debitTransactions:number = 0;
let totaCreditAmount:number = 0;
let totaDebitAmount:number = 0;
let suspiciousTransCount:number = 0;
for(let i:number=0; i<transactions.length; i++){
    if(transactions[i] > 0){
        if(transactions[i] > 10000){
            console.log("Suspicious Credit Transaction of Amount: "+ transactions[i]);
            suspiciousTransCount++;
        }
        totaCreditAmount += transactions[i];
        creditTransactions++;
    }else{
        if(transactions[i] < -10000){
            console.log("Suspicious Debit Transaction of Amount: "+ transactions[i]);
            suspiciousTransCount++;
        }
        totaDebitAmount += transactions[i];
        debitTransactions++;
    }
}

console.log("Total Number of Credit Transactions: "+ creditTransactions);
console.log("Total Number of Debit Transactions: "+ debitTransactions);
console.log("Total Amount Credited in A/c: "+ totaCreditAmount);
console.log("Total Amount Debited from A/c: "+ totaDebitAmount);
console.log("Total Remaining Amount in Bank A/c: "+ (totaCreditAmount+totaDebitAmount));
console.log("Total Number of Suspicious Transactions Count: "+ suspiciousTransCount);
