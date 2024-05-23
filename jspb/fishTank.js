function fishTank(input){
    let lenghtCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let highCm = Number(input[2]);
    let occupiedSpace = Number(input[3]) / 100;
    

    let tankVolume = lenghtCm * widthCm * highCm;
    let volumeInLiters = tankVolume / 1000

    let neddedLiters = volumeInLiters * (1 - occupiedSpace)



console.log(neddedLiters)

}

fishTank(["85 ","75 ","47 ","17 "])
fishTank(["105 ","77 ","89 ","18.5 "])