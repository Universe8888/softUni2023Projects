function solve(arr) {
    let rawKey = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Generate') {
            console.log(`Your activation key is: ${rawKey}`);
            break;
        }

        let [command, ...args] = arr[i].split('>>>');

        switch (command) {
            case 'Slice':
                rawKey = slicer(rawKey, Number(args[0]), Number(args[1]));
                console.log(rawKey);
                break;
            case 'Flip':
                rawKey = flipper(rawKey, args[0], Number(args[1]), Number(args[2]));
                console.log(rawKey);
                break;
            case 'Contains':
                substringer(rawKey, args[0]);
                break;
        }
    }

    function slicer(rawKey, index1, index2) {
        return rawKey.substring(0, index1) + rawKey.substring(index2);
    }

    function flipper(rawKey, upOrLow, index1, index2) {
        let substringToFlip = rawKey.substring(index1, index2);

        let flippedSubstring = '';
        for (let ch of substringToFlip) {
            if (upOrLow === 'Upper') {
                flippedSubstring += ch.toUpperCase();
            } else if (upOrLow === 'Lower') {
                flippedSubstring += ch.toLowerCase();
            } else {
                flippedSubstring += ch;
            }
        }

        return rawKey.substring(0, index1) + flippedSubstring + rawKey.substring(index2);
    }

    function substringer(rawKey, substring) {
        if (rawKey.includes(substring)) {
            console.log(`${rawKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
    }
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);

// by GeRgY updated by Me