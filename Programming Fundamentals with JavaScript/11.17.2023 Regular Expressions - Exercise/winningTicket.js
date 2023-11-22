function checkLotteryTickets(input) {
    const tickets = input.split(/,\s*/).map(t => t.trim());
    const output = [];
    const regex = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;

    function checkTicketHalves(left, right) {
        const leftMatch = left.match(regex);
        const rightMatch = right.match(regex);

        if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
            const minLength = Math.min(leftMatch[0].length, rightMatch[0].length);
            const symbol = leftMatch[0][0];
            return minLength === 10 ? `10${symbol} Jackpot!` : `${minLength}${symbol}`;
        }

        return null;
    }

    for (const ticket of tickets) {
        if (ticket.length !== 20) {
            output.push(`invalid ticket`);
            continue;
        }

        const [leftHalf, rightHalf] = [ticket.substring(0, 10), ticket.substring(10)];
        const matchResult = checkTicketHalves(leftHalf, rightHalf);

        if (matchResult) {
            output.push(`ticket "${ticket}" - ${matchResult}`);
        } else {
            output.push(`ticket "${ticket}" - no match`);
        }
    }

    return output.join('\n');
}

const input = '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey';
console.log(checkLotteryTickets(input));