// function printUniquePairs(arr, sum) {
//     let pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 let pair = [arr[i], arr[j]];
//                 if (!pairs.some(p => p.includes(arr[i]) && p.includes(arr[j]))) {
//                     pairs.push(pair);
//                 }
//             }
//         }
//     }
//     pairs.forEach(pair => console.log(pair.join(' ')));
// }

//Judge did not approve :)

//Using a different basic function

function printUniquePairs(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(arr[i] + ' ' + arr[j]);
            }
        }
    }
}


printUniquePairs([14, 20, 60, 13, 7, 19, 8], 27);