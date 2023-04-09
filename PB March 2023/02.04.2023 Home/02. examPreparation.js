function examPreparation(input) {
    const unsatisfactoryLimit = Number(input.shift());
    let unsatisfactoryCount = 0;
    let gradesSum = 0;
    let problemsSolved = 0;
    let lastProblem = '';
  
    while (true) {
      const problemName = input.shift();
      if (problemName === 'Enough') {
        const averageGrade = gradesSum / problemsSolved;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemsSolved}`);
        console.log(`Last problem: ${lastProblem}`);
        break;
      }
      const grade = Number(input.shift());
      gradesSum += grade;
      problemsSolved++;
      lastProblem = problemName;
      if (grade <= 4) {
        unsatisfactoryCount++;
        if (unsatisfactoryCount === unsatisfactoryLimit) {
          console.log(`You need a break, ${unsatisfactoryLimit} poor grades.`);
          break;
        }
      }
    }
  }
  

examPreparation (["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
