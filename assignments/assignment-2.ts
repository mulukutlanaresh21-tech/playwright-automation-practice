//1. Credit Score:

let creditScore: number = 750;

if(creditScore > 750){
    console.log("Loan is Approved!");
}else if(creditScore >= 650){
    console.log("Additional Checks to be performed for Loan Approval");
}else{
    console.log("Loan is Denied");
}

//2. Income:

let income: number = 50000;

if(creditScore > 750){
    console.log("Loan is Approved!");
}else if(creditScore >= 650){
    console.log("Additional Checks to be performed for Loan Approval");
    if(income >= 50000){
        console.log("Loan is to be Considered");
    }else{
        console.log("Loan is Not Considered");
    }
}else {
    console.log("Loan is Denied");
}

//3. Employment Status:
let isEmployed:boolean = true;

if(creditScore > 750){
    console.log("Loan is Approved!");
}else if(creditScore >= 650){
    console.log("Additional Checks to be performed for Loan Approval");
    if(income >= 50000){
        console.log("Loan is to be Considered");
        if(isEmployed){
            console.log("Customer is Employed Eligible for Loan")
        }else{
            console.log("Loan is Denied");
        }
    }else{
        console.log("Loan is Not Considered");
    }
}else{
    console.log("Loan is Denied");
}


//4. Debt-to-Income Ratio:
let dtiRatio:number = 39;

if(creditScore > 750){
    console.log("Loan is Approved!");
}else if(creditScore >= 650){
    console.log("Additional Checks to be performed for Loan Approval");
    if(income >= 50000){
        console.log("Loan is to be Considered");
        if(isEmployed){
            console.log("Customer is Employed Eligible for Loan");
            if(dtiRatio < 40){
                console.log("Loan is Approved!");
            }else{
                console.log("Loan is Denied")
            }
        }else{
            console.log("Loan is Denied");
        }
    }else{
        console.log("Loan is Not Considered");
    }
}else {
    console.log("Loan is Denied");
}

// Common function for Loan Eligibility

function loanEligibility(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void{

    if(creditScore > 750){
        console.log("Loan is Eligible for "+ customerName);
    }else if(creditScore >= 650){
        if(income >= 50000){
            if(isEmployed){
                if(debtToIncomeRatio < 40){
                    console.log("Loan is Eligible for "+customerName);
                }else{
                    console.log("Loan is Denied for "+customerName);
                }
            }else{
                console.log("Loan is Denied for "+customerName);
            }
        }else{
            console.log("Loan is Denied for "+customerName);
        }
    }else {
        console.log("Loan is Denied for "+customerName);
    }
}

loanEligibility("Jhon Doe", 720, 55000.0, true, 35.0);