function walking(input){
    let index = 0
    let command = input[index];
    index++;

    let goal = 10000;
    let steps = 0;

    while (steps < goal){
        

        if (command === "Going home"){
            steps += Number(input[index]);
            index++;
            break;
        }
        let currentSteps = Number(command);
        steps += currentSteps
        command = input[index];
        index++;
    }
    if (steps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`)

    }else {
        console.log(`${goal - steps} more steps to reach goal.`)
    }

}
walking (["1000",
"1500",
"2000",
"6500"])
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


