function moving(input){
    let index= 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;
    let high = Number(input[index]);
    index++;

    let volume = width * lenght * high;
    let command = input[index];
    index++;

    while( command !== "Done"){
        let currentSpace = Number(command);
        volume -= currentSpace;
        if( volume < 0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
          break;
        }
        command = input[index];
        index++
    }
    if (volume > 0){
        console.log(`${volume} Cubic meters left.`)
    }


}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
