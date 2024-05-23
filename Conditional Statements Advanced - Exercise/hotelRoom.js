function hotelRoom (input){
    let month = input[0];
    let night = Number(input[1]);
    
    let studioPrice = 0
    let apartamentsPrice = 0

    if ( month === "May" || month === "October"){
        apartamentsPrice = 65 * night;
        studioPrice = 50 * night;
        if ( night > 7 && night <= 14){
            studioPrice = studioPrice * 0.95;
        }else if (night > 14){
            studioPrice = studioPrice * 0.70;
        }

    }else if (month === "June" || month === "September"){
        studioPrice = night * 75.20;
        apartamentsPrice = night * 68.70;
        if (night > 14 ){
            studioPrice = studioPrice * 0.80;
        }
    } else {
        studioPrice = night * 76;
        apartamentsPrice = night * 77;
    }

    if (night > 14){
        apartamentsPrice= apartamentsPrice * 0.90;
    }

    

    console.log (`Apartment: ${apartamentsPrice.toFixed(2)} lv.`)
    console.log (`Studio: ${studioPrice.toFixed(2)} lv.`)


}

hotelRoom(["May","15"])
hotelRoom(["June",

"14"])
hotelRoom(["August", "20"])