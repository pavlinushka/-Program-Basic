function tennisRanklist(input){
    let index = 0

    let tournirCount = Number(input[index]);
    index++;
    let beginingPoints = Number(input[index]);
    index++;
    let currentPoints = 0
    let winCount = 0
   
    

  for (let i =0; i < tournirCount; i++){
    let result = (input[index])
    index++;

    switch(result){
      case "W" : 
      winCount ++;
      currentPoints += 2000;break;
      case "F":
        currentPoints += 1200 ; break;
      case "SF": 
      currentPoints += 720 ; break;
      
    }
     
  }
  let sum = beginingPoints + currentPoints;

  let avrPoints = Math.floor(currentPoints / tournirCount)
  let wiinP = winCount / tournirCount *100

  console.log(` Final points: ${sum}`)
console.log(`Average points: ${avrPoints}`)
console.log (wiinP.toFixed(2) + "%")



}
tennisRanklist (["5","1400","F","SF","W","W","SF"])
tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])