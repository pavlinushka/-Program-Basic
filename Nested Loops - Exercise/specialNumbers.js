function specialNumbers(input){
    let n = Number(input[0]);
    let printLine = " "
   
    

    for( let i = 1111; i <= 9999; i++){
        let numAsString = String(i);
        let isSpecial = true;
        
        for (let b = 0; b < numAsString.length; b++){
            let currentDigir = Number(numAsString[b])

            
            if ( n % currentDigir !== 0){
                isSpecial = false;
                break
            }
            
        }
      if (isSpecial){
        printLine += `${numAsString} `
      }
    }

  console.log(printLine)
}
specialNumbers(["11"])