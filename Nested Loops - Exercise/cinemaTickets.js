function cinemaTickets(input){

    let index = 0;
    let command = input[index]
    index++;
    let studentTicket = 0
    let standartTickets = 0;
    let kidTicket = 0

    

    while(command !== "Finish"){
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++
        let ticketType = input[index];
        index++;
        let soldTickets = 0;

        while (ticketType !== "End"){

            switch(ticketType){
                case "standard": standartTickets++ ; break;
                case "kid": kidTicket++; break;
                case "student": studentTicket++; break;
            }
            soldTickets++;

            if(soldTickets >= freeSeats){
                break;
            }

            ticketType = input[index];
            index++;

        }
        let procent = soldTickets / freeSeats * 100

        console.log(`${movieName} - ${procent.toFixed(2)}% full.`)

        command = input[index];
        index++;

    }
    let totalTickets = kidTicket + studentTicket + standartTickets;
    console.log (`Total tickets: ${totalTickets}`)

    let studentProcent = studentTicket / totalTickets * 100;
   console.log(`${studentProcent.toFixed(2)}% student tickets.`)

   let standartProcent = standartTickets / totalTickets * 100;
   console.log(`${standartProcent.toFixed(2)}% standard tickets.`)

   let kidProcent = kidTicket / totalTickets * 100;
   console.log(`${kidProcent.toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
cinemaTickets(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])