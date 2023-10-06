function formatGrade(grade) {
    if (grade < 2.00 || grade > 6.00) {
        console.log("Invalid grade");
        return;
    }
    
    let description;
    
    
    if (grade < 3.00) {
        description = "Fail";
    } else if (grade >= 3.00 && grade < 3.50) {
        description = "Poor";
    } else if (grade >= 3.50 && grade < 4.50) {
        description = "Good";
    } else if (grade >= 4.50 && grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }
    
    
    let formattedGrade = Number.isInteger(grade) ? grade : grade.toFixed(2);
    console.log(`${description} (${formattedGrade})`);
}

formatGrade(5.33);