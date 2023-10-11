  function findBitAtPosition1(n) {

    let binaryRepresentation = n.toString(2);

    let shiftedN = n >> 1;

    let bitAtPosition1 = shiftedN & 1;

    console.log(`Binary representation of ${n} is ${binaryRepresentation}`);

    console.log(`The bit at position 1 is: ${bitAtPosition1}`);

  }

  findBitAtPosition1(13);