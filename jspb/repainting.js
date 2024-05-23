function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let priceNylon = ( nylon +2 ) * 1.50;
    let addedPaint = paint * 0.10;
    let pricePaint = (paint + addedPaint) * 14.50;
    let paintThinnerPrice = paintThinner * 5.00;

    let currentPrice = priceNylon + pricePaint + paintThinnerPrice + 0.40;
    let workerHourPrice = currentPrice  * 0.30;
    let totalWorkerPrice =  workerHourPrice * workHours;

    let totalSum = currentPrice + totalWorkerPrice;

    console.log(totalSum)
    



}

repainting(["10 ","11 ","4 ","8 "])
repainting(["5 ","10 ","10 ","1 "])