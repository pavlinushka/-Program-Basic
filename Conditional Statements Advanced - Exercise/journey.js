function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    moneySpent = 0


    let destination = ``;
    let restingPlace= ``

    if (budget <= 100 ){
        destination = "Bulgaria"
        if (season === "summer"){
            moneySpent = budget * 0.30;
            restingPlace = "Camp"
        }else {
            moneySpent = budget * 0.70;
            restingPlace = "Hotel"
        }
    
    }else if ( budget <=1000 ){
        destination = "Balkans";
        if (season === "summer"){
            moneySpent = budget * 0.40;
            restingPlace = "Camp"
        }else{
            moneySpent = budget * 0.80;
            restingPlace = "Hotel"
        }
    
    }else {
        destination = "Europe";
        moneySpent = budget * 0.90;
        restingPlace = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${restingPlace} - ${moneySpent.toFixed(2)}`)

        


}
journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])