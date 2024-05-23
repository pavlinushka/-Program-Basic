function sumNumbers(input){
    let index = 0
    let numberSum = Number(input[index])
    index++;
    let sum = 0
    while(true){
       
        if (numberSum <= sum){
        break;  
        }
        let n = Number(input[index])
            index++;
            sum += n
    }

       console.log(sum)
}
sumNumbers(["100", "10", "20", "30", "40"])
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])