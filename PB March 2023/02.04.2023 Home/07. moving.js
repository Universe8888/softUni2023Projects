function moving(input) {
    let freWidth = Number(input[0]);
    let freeLenght = Number(input[1]);
    let freeHight = Number(input[2]);
    let cubicMetersFree = freWidth * freeLenght * freeHight;
    let cubicMetersTaken = 0;
    let index = 3;

    while (input[index] !== 'Done') {
        let boxes = Number(input[index]);
        cubicMetersTaken += boxes;
        if (cubicMetersTaken > cubicMetersFree) {
            break;
        }
        index++;
    }
    
    if (cubicMetersTaken <= cubicMetersFree) {
        console.log(`${cubicMetersFree - cubicMetersTaken} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${cubicMetersTaken - cubicMetersFree} Cubic meters more.`);
    }
    

}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);
