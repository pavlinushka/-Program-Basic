function number100(input){

    let a = Number(input[0]);
    let min = 100
    let max = 200

    if (a < 100){
        console.log ("Less than 100");

    }else  if ( a  <= 200){
      
        console.log("Between 100 and 200");
    }else if ( a > 200){
        console.log("Greater than 200")
    }
        
}
number100 (["99"])