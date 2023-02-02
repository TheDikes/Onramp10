// Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table 1-49: F 50-59: E 60-69: D 70-79: C 80-89: B 90-100: A

function calculateGrade(marks){
    let sum = marks.reduce((a,b) => a + b);
    let avg = sum / marks.length;

    if(avg>=90 && avg <=100){
        return "A";
    }else if(avg < 90 && avg >= 80){
        return "B"
    }else if(avg < 80 && avg >= 70){
        return "C"
    }else if(avg < 70 && avg >= 60){
        return "D"
    }else if(avg < 60 && avg >= 50){
        return "E"
    }else{
        return "F"
    }
}