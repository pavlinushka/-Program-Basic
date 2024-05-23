function excursia(input) {
    let index = 0;
    let seaCount = Number(input[index])
    index++
    let mountainCount = Number(input[index])
    index++

 
   
   
    let seaPrice = 680
    let mountainPrice = 499
    let profit = 0
    

    while(true ){
        let text = input[index]
        index++
        if ( text === "Stop"){
            break
        }
        
      switch(text){
        case "sea" :
           if(seaCount !== 0){
            profit += seaPrice
            seaCount-- 
           }else{
            break
           }
        case "mountain":
            if (mountainCount !==0)  {
           profit += mountainPrice
            mountainCount--
         
         }else {
            break
         }
       
        }
         
        
        if ( seaCount === 0 && mountainCount === 0){
            console.log("Good job! Everything is sold.")
            break
            }
        } 
       
        
            console.log(`Profit: ${profit} leva.`)   
        } 
    

    
    



excursia(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

