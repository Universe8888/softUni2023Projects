function ConcatenateData(input) {
    let firstname = input[0];
    let lastname = input[1];
    let age = input[2];
    let town = input[3];


    console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}. `);

}

ConcatenateData(['Boris', 'Manzov', 24, 'Sofia'])