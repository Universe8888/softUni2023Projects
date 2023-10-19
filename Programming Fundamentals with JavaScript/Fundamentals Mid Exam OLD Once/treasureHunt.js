function chestStatus(input) {
    let treasureChest = input.shift().split('|');

    for (const commandLine of input) {
        const [command, ...args] = commandLine.split(' ');

        switch (command) {
            case "Loot":
                for (const item of args) {
                    if (!treasureChest.includes(item)) {
                        treasureChest.unshift(item);
                    }
                }
                break;

            case "Drop":
                const index = Number(args[0]);
                if (index >= 0 && index < treasureChest.length) {
                    const [droppedItem] = treasureChest.splice(index, 1);
                    treasureChest.push(droppedItem);
                }
                break;

            case "Steal":
                const count = Number(args[0]);
                const stolenItems = treasureChest.splice(-count);
                console.log(stolenItems.join(", "));
                break;
            
            case "Yohoho!":
                break;
        }
    }

    if (treasureChest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        const totalLength = treasureChest.reduce((sum, item) => sum + item.length, 0);
        const averageGain = totalLength / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

chestStatus(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);