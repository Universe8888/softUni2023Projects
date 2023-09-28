function printDayName(dayNumber) {
    let days = [
        'Invalid day!', // 0
        'Monday',       // 1
        'Tuesday',      // 2
        'Wednesday',    // 3
        'Thursday',     // 4
        'Friday',       // 5
        'Saturday',     // 6
        'Sunday'        // 7
    ];

    if(dayNumber < 1 || dayNumber > 7) {
        console.log(days[0]);
    } else {
        console.log(days[dayNumber]);
    }
}
printDayName(4);