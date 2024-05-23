function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute =  Number(input[1]);
    let ariveHour =  Number(input[2]);
    let ariveMinute =  Number(input[3]);
    let totalExamMinutes = examHour * 60 + examMinute;
    let totalArivelMinutes = ariveHour * 60 + ariveMinute;
     
   
    if (totalArivelMinutes > totalExamMinutes) {
        console.log("Late");

        let diference = totalArivelMinutes - totalExamMinutes;
        if (diference >=60) ;
        let hour = Math.floor (diference /60)
        let minutes = diference % 60;
        if (diference >=60){
            if (minutes <=10){
                console.log(`${hour}:0${minutes} hours after the start`)
            }else {
                console.log(`${hour}:${minutes} hours after the start`)
            }
        }else {
            console.log(`${minutes} minutes after the start`)
        }

    }else if (totalExamMinutes - totalArivelMinutes > 30) {
        console.log("Early");
        let diference = totalExamMinutes - totalArivelMinutes;
        if (diference >=60) ;
        let hour = Math.floor (diference /60)
        let minutes = diference % 60;
        if (diference >=60){
            if (minutes <=10){
                console.log(`${hour}:0${minutes} hours before the start`)
            }else {
                console.log(`${hour}:${minutes} hours before the start`)
            }
        }else {
            console.log(`${minutes} minutes before the start`)
        }
                
    }else {
        console.log("On time");
        let diference = totalExamMinutes - totalArivelMinutes;

        let minutes = diference % 60;
        if (minutes > 0){
            console.log(` ${minutes} minutes before the start`)
        }
        

    }
}

    




onTimeForTheExam (["9","30","9","50"])
onTimeForTheExam(["14", "00", "13", "55"])
onTimeForTheExam
(["10", "00", "10", "00"])
onTimeForTheExam(["11", "30","12", "29"])