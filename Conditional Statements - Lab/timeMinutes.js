function timeMinutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
    if (minutesPlus15 >= 60){
        hours = hours + 1
        minutesPlus15 = minutesPlus15 - 60
    }
    if (hours === 24){
        hours = 0;

    }

    if (minutesPlus15 < 10){
      console.log(`${hours}:0${minutesPlus15}`)  
    }else {
        console.log (`${hours}:${minutesPlus15}`)
    }



}

timeMinutes(["1", "46"])
timeMinutes(["0", "01"])
timeMinutes(["23", "59"])
timeMinutes(["11", "08"])
timeMinutes(["12", "49"])