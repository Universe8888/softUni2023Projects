function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let floorOutput = '';
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                floorOutput += `L${i}${j} `;
            } else if (i % 2 === 0) {
                floorOutput += `O${i}${j} `;
            } else {
                floorOutput += `A${i}${j} `;
            }
        }
        console.log(floorOutput.trim());
    }
}

building(["6", "4"]);
