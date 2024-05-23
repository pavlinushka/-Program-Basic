function fishingBoat(input){
    let budgetGroup  = Number(input[0]);
    let seazon = input[1];
    let fisherCount = Number(input[2]);

    let rentalPrice = 0;

    if (seazon ==="Spring"){
        rentalPrice = 3000;
    }else if (seazon === "Summer" || seazon === "Autumn"){
        rentalPrice = 4200;
    }else {
        rentalPrice = 2600;
    }

    if (fisherCount <= 6 ){
        rentalPrice = rentalPrice - rentalPrice * 0.10;
    }else if (fisherCount >= 7 && fisherCount <= 11){
        rentalPrice = rentalPrice - rentalPrice * 0.15;
    }else {
        rentalPrice = rentalPrice - rentalPrice * 0.25;
    }

    if (fisherCount % 2 === 0 && seazon !== "Autumn"){
        rentalPrice = rentalPrice - rentalPrice * 0.05;

    }
    if (rentalPrice <= budgetGroup){
        console.log (`Yes! You have ${(budgetGroup - rentalPrice).toFixed(2)} leva left.`)
    }else {
        console.log (`Not enough money! You need ${(rentalPrice - budgetGroup).toFixed(2)} leva.`)
    }
    
    

}
fishingBoat(["3000",

"Summer",

"11"])
fishingBoat(["3600",

"Autumn",

"6"])
fishingBoat(["2000", "Winter", "13"])