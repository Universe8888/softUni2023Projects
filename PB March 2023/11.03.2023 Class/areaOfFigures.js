function areaOfFigures(input) {
    let figure = input[0];
    let result = 0;
  
    if (figure === "square") {
        let side = Number(input[1]);
        result = side * side;
    } else if (figure === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
    } else if (figure === "circle") {
        let r = Number(input[1]);
        result = Math.PI * Math.pow(r, 2);
    } else {
        let sideA = Number(input[1]);
        let h = Number(input[2]);
        result = 0.5 * sideA * h;
    }

    console.log(result.toFixed(3));
}
  
areaOfFigures(["rectangle", "7", "2.5"]);
