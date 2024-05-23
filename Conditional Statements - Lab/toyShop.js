function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let tedyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puzzleCount + dollsCount + tedyBearCount + minionCount + truckCount
    

    let puzzelPrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let teddyPrice = tedyBearCount * 4.10;
    let minionPrice = minionCount * 8.20;
    let truckPrice = truckCount * 2;
    let totalprice = puzzelPrice + dollsPrice + teddyPrice + minionPrice + truckPrice;
       if (totalCount >= 50){
        totalprice = totalprice - ((totalprice * 25) / 100)
        
    }
    let rent =  (totalprice * 10) / 100
    let profit = totalprice - rent
    if (profit >= tripPrice){
        let leftMoney = profit - tripPrice

        console.log 	(`Yes! ${leftMoney.toFixed(2)} lv left.`)

    }else {
        let needed =  tripPrice - profit
        console.log(`Not enough money! ${needed.toFixed(2)} lv needed. `)
    }



}

toyShop (["40.8","20","25" ,"30","50","10"])
toyShop(["320","8","2","5","5","1"])

