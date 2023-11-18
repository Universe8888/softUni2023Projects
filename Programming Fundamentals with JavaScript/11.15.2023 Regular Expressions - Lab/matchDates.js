function matchDates(inputString) {
    const regex = /(?<day>\d{2})(?<separator>[./-])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})/g;
    const results = [];
    let match;

    while ((match = regex.exec(inputString)) !== null) {
        const { day, month, year } = match.groups;
        results.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    results.forEach(date => console.log(date));
}

matchDates("13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937 23/09/1973, 1/Feb/2016");