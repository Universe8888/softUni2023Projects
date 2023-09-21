function convertCenturies(centuries) {
    // 1 century = 100 years
    let years = centuries * 100;
    
    // 1 year = 365.24 days
    let days = Math.floor(years * 365.24);
    
    // 1 day = 24 hours
    let hours = days * 24;
    
    // 1 hour = 60 minutes
    let minutes = hours * 60;
    
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

convertCenturies(1);