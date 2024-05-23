function foodDelivery(input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggiMenu = Number(input[2]);

    let chikenMenuPrice = chikenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let veggimenuPrice = veggiMenu * 8.15;

    let currentPrice = chikenMenuPrice + fishMenuPrice + veggimenuPrice;

    let dessertPrice = currentPrice * 0.2;
    let foodDeliveryPrice = 2.50;

    let orderPrice = currentPrice + dessertPrice + foodDeliveryPrice;

    console.log(orderPrice)


}




foodDelivery(["2 ","4 ","3 "])
foodDelivery(["9 ","2 ","6 "])