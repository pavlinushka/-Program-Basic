function bonusScore(input){
    let score = Number(input[0]);
    let bonus = 0.0;
    if (score <=100){
        bonus = 5;
    } else if (score <= 1000) {
        bonus = score * 0.20;
    }else if (score >1000) {
        bonus = score * 0.10;
    }
    if (score % 2 === 0){
        bonus = bonus + 1
    }if (score % 10 ===5){
        bonus = bonus + 2
    }
    let totalScore = score + bonus;
    console.log(bonus);
    console.log(totalScore)
    


}


bonusScore(["20"])
bonusScore(["175"])
bonusScore(["2703"])
bonusScore(["15875"])