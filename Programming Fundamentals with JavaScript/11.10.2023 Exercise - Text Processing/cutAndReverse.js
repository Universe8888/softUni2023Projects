function cutAndReverse(str) {
    const half = str.length / 2;
    const firstHalf = str.substring(0, half).split('').reverse().join('');
    const secondHalf = str.substring(half).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');