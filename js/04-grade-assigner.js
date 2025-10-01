function gradeAssigner() {
    const userGrade = prompt("Choose Grade from 1 to 100: ").toLowerCase();
       
        let score;
        if (userGrade>=90) {
            score = "A";
            alert( 'You received  an  ' + score);
            console.log('You received  an  '  + score)
        }
        else if (userGrade>=80) {
            score = "B";
             alert( 'You received  a  ' + score);
             console.log('You received  a  '  + score)
        } 
        else if (userGrade>=70) {
            score = "C";
             alert( 'You received  a  ' + score);
             console.log('You received    '  + score)
        }
        else if (userGrade>=60) {
            score = "D";
             alert( 'You received a  ' + score);
             console.log('You received  a  '  + score)
        }
        else if (userGrade <60) {
            score = "F";
            alert( 'You received  an  ' + score);
            console.log('You received  an  '  + score)
        }
    }

    gradeAssigner();