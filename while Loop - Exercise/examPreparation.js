function examPreparation(input){
    let index = 0
    let lowGradesCount = Number(input[index]);
    index++

    let taskName = input[index]
    index++
    

    let taskCounter = 0;
    let poorGradesCounter = 0;
    let totaScoore = 0
    let lastTaskName = "";

   

    while ( taskName !== "Enough" ){
        let taskGrade = Number(input[index]);
        index++
        totaScoore += taskGrade

        lastTaskName = taskName;
        taskCounter++;
        
        if (taskGrade <= 4){
            poorGradesCounter++;

            if(poorGradesCounter === lowGradesCount){
                break;
            }
        }

        taskName = input[index];
        index++;
    }

    let averageScoore = totaScoore / taskCounter

if(poorGradesCounter === lowGradesCount){
    console.log(`You need a break, ${poorGradesCounter} poor grades.`)
}else {
    console.log(`Average score: ${averageScoore.toFixed(2)}`)
    console.log(`Number of problems: ${taskCounter}`)
    console.log(`Last problem: ${lastTaskName}`)
  }

}

examPreparation(["3","Money","6","Story","4","Spring","Time","5","Bus","6","Enough"])