function calculateTotalCostAlternative(inputLines) {
    let totalCost = 0;
    const furnitureList = [];

    for (let line of inputLines) {
        if (line === 'Purchase') {
            break;
        }

        let parts = line.split('<<');
        if (parts.length !== 2) {
            continue; 
        }

        let namePart = parts[0];
        let priceQuantityPart = parts[1].split('!');

        if (priceQuantityPart.length !== 2) {
            continue;
        }

        let name = namePart.replace('>>', '');
        let price = parseFloat(priceQuantityPart[0]);
        let quantity = parseInt(priceQuantityPart[1], 10);

        if (name.charAt(0) === name.charAt(0).toUpperCase() && !name.charAt(0).match(/[0-9]/) && !isNaN(price) && !isNaN(quantity)) {
            furnitureList.push(name);
            totalCost += price * quantity;
        }
    }

    console.log("Bought furniture:");
    furnitureList.forEach(name => console.log(name));
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

const input = [
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
];
calculateTotalCostAlternative(input);

//100 / 100 Judge

// function calculateTotalCost(inputLines) {
//     let totalCost = 0;
//     const furnitureList = [];
    
//     for (let line of inputLines) {
//         if (line === 'Purchase') {
//             break;
//         }

//         const regex = /^>>([A-Z][a-zA-Z]*)<<(\d+(?:\.\d+)?)!(\d+)$/;
//         const match = line.match(regex);
        
//         if (match) {
//             const name = match[1];
//             const price = Number(match[2]);
//             const quantity = Number(match[3]);
//             furnitureList.push(name);
//             totalCost += price * quantity;
//         }
//     }

//     console.log("Bought furniture:");
//     furnitureList.forEach(name => console.log(name));
//     console.log(`Total money spend: ${totalCost.toFixed(2)}`);
// }

// const input = [
//     '>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase'
// ];
// calculateTotalCost(input);

// 80 / 100 Judge