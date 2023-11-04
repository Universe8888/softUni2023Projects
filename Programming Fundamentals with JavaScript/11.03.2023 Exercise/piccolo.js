function manageParkingLot(operations) {
    const parkingLot = new Set();
    
    for (const operation of operations) {
        const [direction, carNumber] = operation.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    const sortedCars = Array.from(parkingLot).sort();

    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedCars.join('\n'));
    }
}
const input1 = [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
    'IN, CA5759XM' 
  ];
  
  const input2 = [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
  ];
  
  manageParkingLot(input1);
//   manageParkingLot(input2);