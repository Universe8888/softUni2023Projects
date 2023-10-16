function softUni(input) {
    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let students = Number(input[3]);

    // Combined efficiency of employees
    let combinedEfficiencyPerHour = employee1 + employee2 + employee3;

    // Calculate hours needed
    let hoursNeeded = 0;
    while (students > 0) {
        hoursNeeded++; // Every iteration represents an hour
        if (hoursNeeded % 4 !== 0) {  // If it's not a break time
            students -= combinedEfficiencyPerHour;
        }
    }

    console.log(`Time needed: ${hoursNeeded}h.`);
}

softUni([5, 30, 5, 1000]);