function newHouse(input){
    let flower = input[0];
    let quantityFlowers = Number(input[1]);
    let sum = Number(input[2]);

    let expenses = 0;

    switch ( flower){
        case "Roses" :
            expenses = quantityFlowers * 5; 
            if (quantityFlowers > 80){
                expenses = expenses - expenses * 0.10
            }
            break;
        case "Dahlias" : 
            expenses = quantityFlowers * 3.80;
            if (quantityFlowers > 90){
                expenses = expenses - expenses * 0.15
            } 
            break ;
        case "Tulips" :
            expenses = quantityFlowers * 2.80 ;
            if (quantityFlowers > 80){
                expenses = expenses - expenses * 0.15
            }
             break ;
        case "Narcissus" : 
        expenses = quantityFlowers * 3 ;
        if (quantityFlowers < 120){
            expenses = expenses + expenses * 0.15
        } 
        break ; 
        case  "Gladiolus" :
            expenses = quantityFlowers * 2.50 ;
            if(quantityFlowers  < 80){
            expenses = expenses + expenses * 0.20
            }
              break ; 
    }
    if (expenses <= sum){
        console.log (`Hey, you have a great garden with ${quantityFlowers} ${flower} and ${(sum - expenses).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(expenses - sum).toFixed(2)} leva more.`)
    }


}
newHouse(["Roses",

"55",

"250"])
newHouse(["Tulips",

"88",

"260"])