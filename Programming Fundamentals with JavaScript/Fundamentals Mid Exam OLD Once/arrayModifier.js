function modifyArray(input) {
    let array = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(' ');

        switch (command[0]) {
            case 'swap': {
                let index1 = Number(command[1]);
                let index2 = Number(command[2]);
                let temp = array[index1];
                array[index1] = array[index2];
                array[index2] = temp;
                break;
            }
            case 'multiply': {
                let index1 = Number(command[1]);
                let index2 = Number(command[2]);
                array[index1] *= array[index2];
                break;
            }
            case 'decrease':
                array = array.map(x => x - 1);
                break;
            case 'end':
                break;
        }
    }

    console.log(array.join(', '));
}

modifyArray([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);