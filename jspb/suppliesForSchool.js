function suppliesForSchool(input){
    let penCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let litterDetergent = Number(input[2])
    let discount = Number(input[3]) / 100;

    let penPrice = penCount * 5.80;
    let markersPrice = markersCount * 7.20;
    let detergentPrice = litterDetergent * 1.20;

    let currentPrice = penPrice + markersPrice + detergentPrice;
    let discountSum = currentPrice * discount
    let finalSum = currentPrice - discountSum;
    console.log(finalSum)




}

suppliesForSchool(["2 ","3 ","4 ","25 "])
suppliesForSchool(["4 ","2 ","5 ","13 "])