function multiplyTable(input) {
    const num = input[0];
    const firstDigit = parseInt(num[2]); //can be used Number as well
    const secondDigit = parseInt(num[1]);
    const thirdDigit = parseInt(num[0]);
  
    for (let i = 1; i <= firstDigit; i++) {
      for (let j = 1; j <= secondDigit; j++) {
        for (let k = 1; k <= thirdDigit; k++) {
          const result = i * j * k;
          console.log(`${i} * ${j} * ${k} = ${result};`);
        }
      }
    }
}

multiplyTable(["324"])