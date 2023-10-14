function manipulateArray(input) {
    
    let nums = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
        let [command, firstArg, secondArg] = input[i].split(' ');

        firstArg = Number(firstArg);
        secondArg = Number(secondArg);

        switch (command) {
            case 'Add':
                nums.push(firstArg);
                break;
            case 'Remove':
                nums = nums.filter(num => num !== firstArg);
                break;
            case 'RemoveAt':
                nums.splice(firstArg, 1);
                break;
            case 'Insert':
                nums.splice(secondArg, 0, firstArg);
                break;
        }
    }

    console.log(nums.join(' '));
}

manipulateArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);