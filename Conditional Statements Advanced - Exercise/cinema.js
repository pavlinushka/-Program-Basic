function cinema(input){
    let projects = input[0];
    let order = Number(input[1]);
    let row = Number(input[2]);
    let income = 0;
    if (projects === "Premiere"){
         income = order * row * 12
    }else if (projects === "Normal"){
         income = order * row * 7.50
    }else if (projects === "Discount"){
         income = order * row * 5
    }
    console.log (`${income.toFixed(2)} leva`)

}
cinema(["Premiere",

"10",

"12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])