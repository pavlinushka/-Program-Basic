function oscars(input){
    index = 0
    let name = input[index];
    index++;

    let points = Number(input[index]);
    index++;

    let n = Number (input[index]);
    index++

    for (let i = 0; i < n; i++){
    let jouryName = input[index]
    index++;
    let currentPoints = Number (input[index])
    index++;
    currentPoints = jouryName.length * currentPoints / 2
    points += currentPoints
    if (points > 1250.5){
        break;
    }
}

if (points > 1250.5){
    console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
}else {
    let diff = Math.abs(points - 1250.5)
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
}

}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])