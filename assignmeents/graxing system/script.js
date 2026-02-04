function myGrade() {
 let score = document.getElementById("userInput").value;
 console.log(score);
 let grade;
 if(score >= 70 && score <= 100 ){
    grade = "Your grade is:  A";
 }else if(score >= 60 && score <= 70 ){
    grade = "Your grade is:  B";
 }else if (score >= 50 && score <= 60 ){
    grade = "Your grade is:  C";
 }else if (score >= 45 && score <= 50 ){
    grade = "Your grade is:  D";
 }else if (score >= 40 && score <= 45 ){
    grade = "Your grade is:  E";
 }else if (score >= 0 && score <= 40 ){
    grade = "Your grade is:  F";
 }else if (score < 0 || score > 100){
    grade ='invalid-number choose between 0-100'
 }
 document.getElementById("result").textContent = "" +grade;
}
