function summerOutfit(input){
    let degree = Number(input[0]);
    let dayNight = input[1];

    let Outfit ;
    let Shoes ;
    

    if (degree >= 10 && degree <= 18){
        if (dayNight === "Morning"){
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        }else if ( (dayNight == "Afternoon") || (dayNight === "Evening")){
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    }else if (degree > 18 && degree <= 24){
        if ((dayNight === "Morning") || (dayNight === "Evening")){
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if ( dayNight === "Afternoon"){
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        }
    } else  {
        if (dayNight === "Morning"){
            Outfit = "T-Shirt";
            Shoes = "Sandals" ;
        } else if ( dayNight === "Afternoon"){
            Outfit = "Swim Suit"; 
            Shoes = "Barefoot";
        }else if (dayNight === "Evening"){
            Outfit = "Shirt";
             Shoes = "Moccasins";
        }
        
    }
    console.log (`It's ${degree} degrees, get your ${Outfit} and ${Shoes}.`)
}
summerOutfit(["16",

"Morning"])
summerOutfit(["22",

"Afternoon"])
summerOutfit(["24", "Afternoon"])
summerOutfit(["28", "Evening"])