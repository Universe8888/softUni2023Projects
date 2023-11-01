function manageMeetings(entries) {
    let scheduled = {};

    for (let entry of entries) {
        let [day, name] = entry.split(' ');

        if (!scheduled[day]) {
            console.log(`Scheduled for ${day}`);
            scheduled[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in scheduled) {
        console.log(`${day} -> ${scheduled[day]}`);
    }
}

manageMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

// console.log('========');

// manageMeetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);