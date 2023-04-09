function graduation(input) {
    let index = 1;
    let name = input[0]; // assign student's name to 'name' variable
    let grade = Number(input[index]);
    let sum = 0;
    let excluded = false;
    let excludedGrade = 0;
    let year = 1;
  
    while (year <= 12) {
      if (excluded) {
        break;
      }
  
      if (grade >= 4.00) {
        sum += grade;
        year++;
        index++;
        if (year <= 12) {
          grade = Number(input[index]);
        }
      } else {
        excluded = true;
        excludedGrade = year;
      }
    }
  
    if (excluded) {
      console.log(`${name} has been excluded at ${excludedGrade} grade`);
    } else {
      let avgGrade = (sum / 12).toFixed(2);
      console.log(`${name} graduated. Average grade: ${avgGrade}`);
    }
  }
  
  graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
  