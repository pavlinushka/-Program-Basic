function depositCalculator(input){
    let deposiSum = Number(input[0]);
    let term = Number(input[1]);
    let annualInterestRate = Number(input[2]) /100;

    let sum = deposiSum + term * ((deposiSum * annualInterestRate)/12)

    console.log(sum) 

}


depositCalculator(["200 ","3 ","5.7 "])