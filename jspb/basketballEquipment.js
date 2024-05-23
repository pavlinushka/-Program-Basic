 function basketballEquipment(input) {

    
    let anuallPrice = Number(input[0]);

    let shoesPrice = anuallPrice - (anuallPrice * 0.4);
    let equipPrice = shoesPrice - (shoesPrice * 0.2);

    let basketballPrice = equipPrice / 4;
    let accsesoarPrice = basketballPrice / 5 ;

    let currentPrice = anuallPrice + shoesPrice + equipPrice + basketballPrice + accsesoarPrice;

    console.log(currentPrice)
}

     basketballEquipment(["365 "])
     basketballEquipment(["550 "])