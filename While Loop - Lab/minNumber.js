function minNumber(input){
    let index = 0;
    let command = input[index];
    index++;
    let max = Number.MAX_SAFE_INTEGER;

    while( command !== "Stop"){
        let num = Number(command);
        if( num < max){
            max = num;
        }





        command = input[index];
        index++;
    }

 console.log(max)
}


minNumber(["100",

"99",

"80",

"70",

"Stop"])
minNumber(["-10", "20", "-30", "Stop"])
minNumber(["45", "-20", "7", "99", "Stop"])
minNumber(["999", "Stop"])
minNumber(["-1", "-2", "Stop"])