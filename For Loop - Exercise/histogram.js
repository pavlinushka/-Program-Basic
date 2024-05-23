function histogram(input){
    let index = 0;

    let n = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;


    for (let i = 0; i <n; i++){
        let currentNumber = Number(input[index])
        index++;
        if (currentNumber < 200){
            p1Counter++;
        }else if(currentNumber >=200 && currentNumber < 400 ){
            p2Counter++;
        }else if(currentNumber >= 400 && currentNumber< 600){
            p3Counter++;
        }else if (currentNumber >=600 && currentNumber< 800){
            p4Counter++;
        }else {
            p5Counter++;
        }
    }
    let p1Precent = p1Counter / n * 100;
    let p2Precent = p2Counter / n * 100;
    let p3Precent = p3Counter / n * 100;
    let p4Precent = p4Counter / n * 100;
    let p5Precent = p5Counter / n * 100;

    console.log(p1Precent.toFixed(2) + "%");
    console.log(p2Precent.toFixed(2) + "%");
    console.log(p3Precent.toFixed(2) + "%");
    console.log(p4Precent.toFixed(2) + "%");
    console.log(p5Precent.toFixed(2) + "%");



}
histogram(["3","1","2","999"])
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])