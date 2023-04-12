//withouth MAP

function specialNumbers(input) {
    let N = parseInt(input[0]);
    let specialNumbers = [];

    for (let i = 1111; i <= 9999; i++) {
        let d1 = Math.floor(i / 1000);
        let d2 = Math.floor((i % 1000) / 100);
        let d3 = Math.floor((i % 100) / 10);
        let d4 = i % 10;
        let digits = [d1, d2, d3, d4];
        
        let isSpecial = true;

        for (let digit of digits) {
            if (digit === 0 || N % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            specialNumbers.push(i);
        }
    }

    console.log(specialNumbers.join(' '));
}

specialNumbers(["3"]);




// function specialNumbers(input) {
//     let N = parseInt(input[0]);
//     let specialNumbers = [];

//     for (let i = 1111; i <= 9999; i++) {
//         let digits = i.toString().split('').map(Number);
//         let isSpecial = true;

//         for (let digit of digits) {
//             if (digit === 0 || N % digit !== 0) {
//                 isSpecial = false;
//                 break;
//             }
//         }

//         if (isSpecial) {
//             specialNumbers.push(i);
//         }
//     }

//     console.log(specialNumbers.join(' '));
// }

// specialNumbers(["3"]);
