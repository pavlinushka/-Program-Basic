function shopping(input){
    let petarBudget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramPametCoun = Number(input[3]);
    
    let videocardprice = videocardCount * 250
    let processorPrice = processorCount * (videocardprice * 0.35) ;
    let ramPametPrice = ramPametCoun * (videocardprice * 0.1 );
   
    let allPrices = videocardprice + processorPrice + ramPametPrice;
    if (videocardCount > processorCount){
        let discount = allPrices * 0.15;
        allPrices = allPrices - discount;
    }
    
    if (petarBudget >= allPrices){
       
        console.log(`You have ${(petarBudget - allPrices).toFixed(2)} leva left!`)
    }else {
        
        console.log(`Not enough money! You need ${(allPrices - petarBudget).toFixed(2)} leva more!`)
    }



}

shopping(["900",
"2",
"1",
"3"])
shopping(["920.45",
"3",
"1",
"1"])

