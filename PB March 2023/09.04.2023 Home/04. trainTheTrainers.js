function trainTheTrainers(input) {
    let jurySize = parseInt(input[0]);
    let totalPresentations = 0;
    let totalSum = 0;
    let presentationIndex = 1;

    while (input[presentationIndex] !== "Finish") {
        let presentationName = input[presentationIndex];
        let sumOfScores = 0;

        for (let i = 0; i < jurySize; i++) {
            sumOfScores += parseFloat(input[presentationIndex + 1 + i]);
        }

        let avgScore = sumOfScores / jurySize;
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);

        totalSum += avgScore;
        totalPresentations++;
        presentationIndex += jurySize + 1;
    }

    let finalAssessment = totalSum / totalPresentations;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);

