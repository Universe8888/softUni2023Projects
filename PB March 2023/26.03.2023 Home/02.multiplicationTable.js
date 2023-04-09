function multiplicationTable(input) {
  let n = Number(input[0]);
  
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${n} = ${n*i}`);
  }
}

multiplicationTable(["5"]);
