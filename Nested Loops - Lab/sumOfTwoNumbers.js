function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0;

    let isFound = false

    for (let a = start; a <= end ; a++){
        for (let b = start ; b <= end; b++){
            let sum = a + b;
            combinationCounter++;
            if (sum === magicNumber){
                console.log(`Combination N:${combinationCounter} (${a} + ${b} = ${magicNumber}) `)
              
                isFound = true
                break;
            
            }
        }
        if(isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)

    }
    

}
sumOfTwoNumbers(["1",

"10",

"5"])
sumOfTwoNumbers(["23",

"24",

"20"])
sumOfTwoNumbers(["88", "888", "1000"])
sumOfTwoNumbers(["88", "888", "2000"])