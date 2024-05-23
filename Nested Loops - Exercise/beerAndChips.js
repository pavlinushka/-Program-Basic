function beerAndChips(input){
    let name= input[0];
    let budjet =Number(input[1]);
    let brojButilki = Number(input[2]);
    let brojChips = Number(input[3]);

    let biraCena = 1.20;
    let cenaChips = (brojButilki * biraCena) *0.45
    let obshtaCena = ((brojButilki * biraCena) + Math.ceil(brojChips * cenaChips))

    if ( budjet >= obshtaCena){
        let restMoney = budjet - obshtaCena
        console.log(`${name} bought a snack and has ${restMoney.toFixed(2)} leva left.`)
    }else{
        let needed = Math.abs(budjet - obshtaCena)
        console.log(`${name} needs ${needed.toFixed(2)} more leva!`)
    }


}
beerAndChips(["Valentin",
"5",
"2",
"4"])


