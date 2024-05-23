function building(input){
    
    let floor = Number(input[0]);
    
    let roomstPerFloor= Number(input[1]);
   

    for (let x = floor; x > 0; x--){ // външен цикъл ходи по сградата от горе на долу
        let buff = "" // за всеки нов етаж се създава променлива буфер
        for(let y = 0; y < roomstPerFloor; y++){ // вътрешният цикъл ходи по етажите
            if (x === floor){
                buff +=`L${x}${y} ` ;
            }else if (x % 2 === 0){
                buff += `O${x}${y} `
            }else{
                buff += `A${x}${y} `
            }
           
        }
        console.log(buff)

    }



}
building(["6","4"])
building(["9","5"])
building(["4", "4"])