// function checkLotteryTickets(input) {
//     const tickets = input.split(/,\s*/).map(t => t.trim());
//     const output = [];
//     const regex = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;

//     function checkTicketHalves(left, right) {
//         const leftMatch = left.match(regex);
//         const rightMatch = right.match(regex);

//         if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
//             const minLength = Math.min(leftMatch[0].length, rightMatch[0].length);
//             const symbol = leftMatch[0][0];
//             return minLength === 10 ? `10${symbol} Jackpot!` : `${minLength}${symbol}`;
//         }

//         return null;
//     }

//     for (const ticket of tickets) {
//         if (ticket.length !== 20) {
//             output.push(`invalid ticket`);
//             continue;
//         }

//         const [leftHalf, rightHalf] = [ticket.substring(0, 10), ticket.substring(10)];
//         const matchResult = checkTicketHalves(leftHalf, rightHalf);

//         if (matchResult) {
//             output.push(`ticket "${ticket}" - ${matchResult}`);
//         } else {
//             output.push(`ticket "${ticket}" - no match`);
//         }
//     }

//     return output.join('\n');
// }

// const input = '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey';
// console.log(checkLotteryTickets(input));

function checkLotteryTickets(input) {
    const regex = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;
    return input.split(/,\s*/).map(t => t.trim()).map(ticket => {
        if (ticket.length !== 20) return 'invalid ticket';

        const match = (half) => (half.match(regex) || [''])[0];
        const leftMatch = match(ticket.substring(0, 10)), rightMatch = match(ticket.substring(10));

        if (leftMatch && rightMatch && leftMatch[0] === rightMatch[0]) {
            const minLength = Math.min(leftMatch.length, rightMatch.length);
            return `ticket "${ticket}" - ${minLength === 10 ? `10${leftMatch[0]} Jackpot!` : `${minLength}${leftMatch[0]}`}`;
        }
        return `ticket "${ticket}" - no match`;
    }).join('\n');
}

const input = '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey';
console.log(checkLotteryTickets(input));

//100 / 100

// function checkLotteryTickets(input) {
//     return input.split(/,\s*/).map(t => {
//         const ticket = t.trim();
//         if (ticket.length !== 20) return 'invalid ticket';

//         const match = (half) => (half.match(/(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/) || [''])[0];
//         const [leftMatch, rightMatch] = [match(ticket.slice(0, 10)), match(ticket.slice(10))];

//         return leftMatch && rightMatch && leftMatch[0] === rightMatch[0]
//             ? `ticket "${ticket}" - ${Math.min(leftMatch.length, rightMatch.length)}${leftMatch[0]}${leftMatch.length === 10 ? ' Jackpot!' : ''}`
//             : `ticket "${ticket}" - no match`;
//     }).join('\n');
// }

// const input = '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey';
// console.log(checkLotteryTickets(input));

// 90/100