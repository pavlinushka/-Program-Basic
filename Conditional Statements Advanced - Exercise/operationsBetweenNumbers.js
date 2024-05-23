function operationsBetweenNumbers(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0 

    switch (operator){
        case "+":
            result  = n1 + n2;
            if (result % 2 === 0){
               console.log(`${n1} ${operator} ${n2} = ${result} - even`); 
            }else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
            }
            break;
        case "-" :
            result = n1 - n2;
            if (result % 2 === 0){
                console.log(`${n1} ${operator} ${n2} = ${result} - even`); 
             }else {
                 console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
             }
             break;
        case "*" :
            result = n1 * n2
            if (result % 2 === 0){
                console.log(`${n1} ${operator} ${n2} = ${result} - even`); 
             }else {
                 console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
             }
             break;
        case "/" :
            result = n1 / n2
                if ( n2 > 0){
                   console.log (`${n1} / ${n2} = ${result.toFixed(2)}`) 
                }else {
                    console.log (`Cannot divide ${n1} by zero`)
                }
                break;
        case "%" :
            result = n1 % n2 
            if (n2 > 0){
               console.log(`${n1} % ${n2} = ${result}`); break 
            }else {
                console.log(`Cannot divide ${n1} by zero`)
            }
            
    

    }


}

operationsBetweenNumbers(["10","12","+"])
operationsBetweenNumbers(["123", "12", "/"])
operationsBetweenNumbers(["112", "0", "/"])
operationsBetweenNumbers(["10", "1", "-"])
operationsBetweenNumbers(["7",

"3",

"*"])
operationsBetweenNumbers(["10", "3", "%"])
operationsBetweenNumbers(["10", "0", "%"])