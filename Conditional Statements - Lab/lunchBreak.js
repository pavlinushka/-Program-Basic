function lunchBreak(input){
    let nameOfSerial = input[0];
    let epizodTime = Number (input[1]);
    let breakTime = Number(input[2]);

    let lunchTime =  breakTime / 8;
    let relaxTime = breakTime / 4
    let leftTime =  breakTime -lunchTime - relaxTime
    if (leftTime >= epizodTime){
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(leftTime - epizodTime)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(epizodTime - leftTime)} more minutes.`)
    }


}

lunchBreak(["Game of Thrones",
"60",
"96"])
lunchBreak(["Teen Wolf",
"48",
"60"])

