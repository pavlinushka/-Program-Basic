function tradeComission(input){
    let city = input[0];
    let num = Number (input[1]);
    comision = 0;
    if ( num >= 0 && num <= 500 ){
       switch (city){
    
        case "Sofia" : console.log(( num * 0.05).toFixed(2)); break;
        case "Varna" : console.log (( num * 0.045).toFixed(2)); break;
        case "Plovdiv" : console.log (( num * 0.055).toFixed(2)); break;
        default : console.log ( "error"); break;
    }
    } else if (num > 500 && num <= 1000){
        switch (city){
            case "Sofia" : console.log (( num * 0.07).toFixed(2)); break;
            case "Varna" : console.log (( num * 0.075).toFixed(2)); break;
            case "Plovdiv" : console.log (( num * 0.08).toFixed(2)); break;
            default : console.log(" error"); break ; 
        }
    } else if (num > 1000 && num <= 10000){
        switch (city){
            case "Sofia" : console.log (( num * 0.08).toFixed(2)); break;
            case "Varna" : console.log (( num * 0.10).toFixed(2)); break;
            case "Plovdiv" : console.log (( num * 0.12).toFixed(2)); break;
            default : console.log( "error"); break;
        }
    }else if (num > 10000){
        switch (city){
            case "Sofia" : console.log(( num * 0.12).toFixed(2)); break;
            case "Varna" : console.log (( num * 0.13).toFixed(2)); break;
            case "Plovdiv" : console.log(( num * 0.145).toFixed(2)); break;
            default : console.log( "error"); break;
        }
    } else {
        console.log("error")
    }

    

    
    
}
    


tradeComission(["Sofia",

"1500"])
tradeComission(["Plovdiv", "499.99"])
tradeComission(["Varna", "3874.50"])
tradeComission(["Kaspichan", "-50"])
tradeComission(["Plovdiv" , 
"10000.01"])