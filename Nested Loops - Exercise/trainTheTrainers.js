function trainTheTrainers(input){
    let index = 0
    let joryCount = input[index]
    index++
   
    let command = input[index]
    index ++;
    
    let totalScore = 0;
    let scoreCounter = 0;
    


    while( command !== "Finish"){
        let presentationName = command;
        let avrSum = 0;

        for (let jury1 = 1; jury1 <=joryCount; jury1++){
              let currentScore= Number(input[index]);
              index++;
              avrSum  += currentScore;
       }
       let avrScore = avrSum / joryCount
       console.log(`${presentationName} - ${avrScore.toFixed(2)}.`)
       totalScore +=avrScore
       scoreCounter++;

        command = input[index];
        index++;

    }
    let totalAvrScore = totalScore / scoreCounter
    console.log(`Student's final assessment is ${totalAvrScore.toFixed(2)}.`)

}
trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])