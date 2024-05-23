function cleverLily(input){
    let lilyAge = Number(input[0]);
    let priceWashing = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let money = 0;
    let toysCount = 0 ; 
    let currentMoney = 10

    for (let i = 1; i<= lilyAge; i++){
        if (i % 2 ===0){
            money += currentMoney;
            currentMoney += 10;
            money--;

        }else {
            toysCount++;

        }

    }
    money += toysCount * pricePerToy;
    let diff = Math.abs(priceWashing - money);
    if (money >= priceWashing){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
    


}
cleverLily(["10","170.00","6"])
cleverLily(["21",

"1570.98",

"3"])