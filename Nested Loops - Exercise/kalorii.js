function kalorii(input){
    let index = 0

    let days = Number(input[index]);
    index++
    let firstKm = Number(input[index])
    index++
        
    let sumKalorii =+ firstKm
    
    

    for (let i = 1; i <= days; i++){
        
        
        let procent = Number(input[index])
        index++
        procent /= 100
    
         sumKalorii +=sumKalorii * procent
         firstKm += sumKalorii
         

         
    }
    if (firstKm > 1000){
        
        console.log (`You've done a great job running ${Math.ceil(firstKm - 1000)} more kilometers!`)
    }else if(sumKalorii < 1000){
        
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - firstKm )} more kilometers`)
    } 
    
    
   
    

}
kalorii(["4","100","30","50","60","80"])