function smeniTwo (input){
    let k = Number(input[0])
    
    let l =  Number(input[1])
    
    let m =  Number(input[2])
    
    let n =  Number(input[3])


        for(let i = k; i <= 8 ; i++ ){
            let counter = 0
            for( let b = 9; b >= l; b--){
                
               for (let  c = m ; c <=8; c++) {
                
                for (let d = 9; d>= n; d--){
                   
                    if( i % 2 ===0 && b % 2 ===1 && c % 2 ===0 && d % 2 ===1 ){
                        if( i === c && b === d ){
                            console.log ("Cannot change the same player.")
                        }else{
                            console.log(`${i}${b} - ${c}${d}`)
                            counter++

                           
                        } 
                    }
        
                    }
                     
                   }   
              }
                     if (counter === 6 ){
                        break
                        }
      }
       
    }
    
smeniTwo(["7",
"6",
"8",
"5"])

