function cinemaTickets(input) {
    let index = 0;

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movie = command;
        let availableSeats = parseInt(input[index]);
        index++;
        let soldTickets = 0;

        while (soldTickets < availableSeats) {
            let ticketType = input[index];

            if (ticketType === "End" || ticketType === "Finish") {
                break;
            }

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            soldTickets++;
            index++;
        }
        // Update the command variable here
        if (input[index] === "End") {
            index++;
        }
        command = input[index];
        index++;

        let percentageFull = (soldTickets / availableSeats) * 100;
        console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`);
        totalTickets += soldTickets;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);
