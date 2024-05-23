function skiTrip(input){
    let daySitting = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let nightStay = daySitting - 1
    let price = 0
    let finalPrice = 0
    switch (type){
        case "room for one person" : 
            price = nightStay * 18
            finalPrice = price
        break;
        case "apartment":
            if (nightStay< 10){
                price = nightStay * 25.00 ;
                finalPrice =price - price * 0.30
            } else if (nightStay > 10 && nightStay < 15){
                price = nightStay * 25.00 ;
                finalPrice = price -  price * 0.35
            } else {
                price = nightStay * 25.00 ;
                finalPrice = price - price * 0.50
            }break;
            case "president apartment":
                if (nightStay< 10){
                    price = nightStay * 35 ;
                    precent =  price * 0.10;
                    finalPrice = price - precent
                }else if (nightStay > 10 && nightStay < 15){
                    price = nightStay * 35 ;
                    precent = price * 0.15
                    finalPrice = price - precent
                } else {
                    price = nightStay * 35 ;
                    precent = price * 0.20
                    finalPrice = price - precent
                }break;

        
        
    }
    if (grade === "positive"){
        finalPrice = finalPrice + finalPrice * 0.25
    }else if (grade != "positive") {
        finalPrice = finalPrice - finalPrice * 0.10
      }
      console.log(finalPrice.toFixed(2))

}
skiTrip(["14",

"apartment",

"positive"])
skiTrip(["30",

"president apartment",

"negative"])
skiTrip(["12", "room for one person", "positive"])