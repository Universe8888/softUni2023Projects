function agencyProfit(input) {
    let agencyName = input[0];
    let ticketsAdults = Number(input[1]);
    let childrenTickets =  Number(input[2]);
    let netPriceForAdultTicket = Number(input[3]);
    let priceForService = Number(input[4]);

    let totalPriceAdultTickets = ticketsAdults * (netPriceForAdultTicket + priceForService);
    let totalPriceChildrenTickets = childrenTickets * (netPriceForAdultTicket * 0.3 + priceForService);
    let totalSales = totalPriceAdultTickets + totalPriceChildrenTickets;

    let profitForAgency = totalSales * 0.2;

    console.log(`The profit of your agency from ${agencyName} tickets is ${profitForAgency.toFixed(2)} lv.`);


}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"]);
