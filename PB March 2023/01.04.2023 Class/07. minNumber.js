function minNumber(input) {
    let index = 0;
    let lowest = Number.POSITIVE_INFINITY;
    while (input[index] !== "Stop") {
      let number = parseInt(input[index]);
      if (!isNaN(number) && number < lowest) {
        lowest = number;
      }
      index++;
    }
    return lowest;

}
console.log(minNumber(["-1",
"-2",
"Stop"]));