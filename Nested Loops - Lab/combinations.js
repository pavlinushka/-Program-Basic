function combination(input){
    let n = Number(input[0]);
    let validCombinationCount = 0;
    let isFound = false
    for( let x1 = 0; x1<= n; x1++){
        for(let x2 = 0; x2 <= n; x2++){
            for(let x3 = 0; x3 <= n; x3++){
                validCombinationCount ++;
                let sum = x1 +x2 +x3;
                if(sum === n ){
                    isFound = true;
                    break;
                }
            

            }
        }
        if(isFound){
            break
        }
      
        } 
        console.log(validCombinationCount)
    }


combination(["25"])
combination(["20"])
combination(["5"])
