function vacation(input){
    let index = 0;
    let neededMoney = Number(input[index])
    index++;
    let savings = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let days = 0;
    let spentCounter = 0; // брой на дните в които тя харчи

    while (savings < neededMoney){
        let currentSum = Number(input[index]);
        index++;
        days++;

        if (command === "spend"){ // ako komandata e rawna na har4im wadim ot nashite spestqwaniq  
            savings -= currentSum;
            spentCounter++;

            if (savings < 0){
                savings = 0
            }
        }else{
            savings += currentSum 
            spentCounter = 0 //trqbwa da zanulim spend countera
        }
        if (spentCounter === 5){
            break;
        }
        command = input[index];
        index++;
    }
    if (spentCounter === 5){
        console.log("You can't save the money.")	
        console.log (`${days}`)
    }else {
        console.log(`You saved the money for ${days} days.`)
    }


}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


