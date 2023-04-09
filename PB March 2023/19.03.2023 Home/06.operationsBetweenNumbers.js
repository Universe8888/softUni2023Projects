function operationsBetweenNumbers(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];
    let result;
  
    switch (operator) {
      case "+":
        result = n1 + n2;
        console.log(`${n1} + ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
        break;
      case "-":
        result = n1 - n2;
        console.log(`${n1} - ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
        break;
      case "*":
        result = n1 * n2;
        console.log(`${n1} * ${n2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
        break;
      case "/":
        if (n2 === 0) {
          console.log(`Cannot divide ${n1} by zero`);
          return;
        }
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        break;
      case "%":
        if (n2 === 0) {
          console.log(`Cannot divide ${n1} by zero`);
          return;
        }
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
        break;
      default:
        console.log("Invalid operator");
    }
  }
  
  operationsBetweenNumbers(["10", "12", "+"]);