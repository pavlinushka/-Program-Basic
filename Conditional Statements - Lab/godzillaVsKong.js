function godzillaVsKong(input){
    let movieBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let dressPerPeople = Number(input[2]);
    if (peopleCount >= 150){ 
        dressPerPeople = dressPerPeople - (dressPerPeople * 0.10)
    }
    let dressForAllPeople = peopleCount * dressPerPeople;
    let movieDecor = movieBudget * 0.10;
    let totalPrice = movieDecor + dressForAllPeople;
    if (movieBudget < totalPrice ){
        let neededMoney = totalPrice - movieBudget
        console.log ("Not enough money!")
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
    }else {
        let leftMoney = movieBudget - totalPrice
        console.log ("Action!" )
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
    }
    





}

godzillaVsKong(["20000","120","55.5"])
godzillaVsKong(["15437.62",
"186",
"57.99"])
godzillaVsKong(["1543.62",
"186",
"57.99"])

