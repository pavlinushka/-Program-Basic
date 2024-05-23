function graduation(input){
    let index = 0;
     let name = input[index];
     index++;

     let i = 1;
     let sumGrade = 0;
     let badGradeCounter = 0;
     let isExcluded = false;

     while( i <= 12){
        let grade = Number(input[index]);
            index++;
            if(grade < 4.00){
                badGradeCounter++;
                if( badGradeCounter === 2){
                    isExcluded = true
                    break
                }
            
                continue;
            }

            sumGrade += grade
            i++;
        }
            if (isExcluded){
               console.log(`${name} has been excluded at ${i} grade`) 
            }else {
                console.log (`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
            }


     
     
     

}

graduation(["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])