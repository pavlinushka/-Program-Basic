function projectsCreation(input) {
    let name = input[0];
    let numberOfProjekts = Number(input[1]);
    let hours = numberOfProjekts * 3;

  
    console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjekts} project/s.`)
    
}


projectsCreation(["George" , "4"])