function calculateTotalIncome(input) {
    let totalIncome = 0;

    input.forEach(line => {
        if (line === 'end of shift') {
            return;
        }

        const orderRegex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
        const match = orderRegex.exec(line);

        if (match) {
            const { customer, product, count, price } = match.groups;
            const totalPrice = Number(count) * Number(price);
            totalIncome += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

const input = [
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
];
calculateTotalIncome(input);