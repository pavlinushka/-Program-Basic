function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMetre = Number(input[1]);
    let timeInSecondsPerMin = Number(input[2]);
    let timeForDistance = distanceInMetre * timeInSecondsPerMin;
    let slowDown = Math.floor(distanceInMetre / 15) * 12.5;
    let allNeededTime = timeForDistance + slowDown;
    if (allNeededTime < recordInSeconds){
         
        console.log(` Yes, he succeeded! The new world record is ${allNeededTime.toFixed(2)} seconds.`)

    }else{
         let ivanTimes = allNeededTime - recordInSeconds
        console.log(`No, he failed! He was ${ivanTimes.toFixed(2)} seconds slower.`)
    }


}
worldSwimmingRecord(["10464","1500","20"])
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

