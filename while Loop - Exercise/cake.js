function cake(input){
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeHeigt = Number(input[index]);
    index++;
    

    let volumeCake = cakeHeigt * cakeWidth
    let command = input[index]
    index++;

    while(command !== "STOP"){
        let curentPieses = Number(command);
        
        volumeCake -=curentPieses;
        if( volumeCake < 0){
            
            console.log(`No more cake left! You need ${Math.abs(volumeCake)} pieces more.`)
            break;
        }
        
        command = input[index]
        index++;

    }
    if (volumeCake > 0){
            console.log(`${volumeCake} pieces are left.` )
            }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
