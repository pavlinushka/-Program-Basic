function trekkingMania(input){
    let index = 0
    let groupCount = Number(input[index]);
    index++;
   

    let first = 0
    let second = 0
    let third = 0
    let fourth = 0
    let fifth = 0 

    for(i= 0; i < groupCount; i++){
        let people = Number(input[index])
        index++
        if (people <= 5){
            first += people
        }else if (people <= 12) {

            second += people;
      
          } else if (people <= 25) {
      
            third += people;
      
          } else if (people <= 40) {
      
            fourth += people;
      
          } else {
      
            fifth += people;
      
          }
        
      
    }
 let all = first + second + third + fourth + fifth;
 let precentFirst = first / all *100;
 let precentSecond = second / all *100;
 let precentThird = third / all *100;
 let precentFourth = fourth /all *100;
 let precentFifth = fifth / all * 100;

 console.log(`${precentFirst.toFixed(2)}%`)
 console.log(`${precentSecond.toFixed(2)}%`)
 console.log(`${precentThird.toFixed(2)}%`)
 console.log(`${precentFourth.toFixed(2)}%`)
 console.log(`${precentFifth.toFixed(2)}%`)
}
trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])