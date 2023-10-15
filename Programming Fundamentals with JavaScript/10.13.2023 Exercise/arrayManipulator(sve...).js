function arrayManipulator(array, commands) {
    array = array.map(Number);
    
    let i = 0;

    while (commands[i] !== `print`) {
        let fullCommand = commands[i];
        let arrayCommand = fullCommand.split(` `);
        let command = arrayCommand.shift();

        switch (command) {
            case `add`:
                add(array, Number(arrayCommand[0]), Number(arrayCommand[1]));
                break;
            case `addMany`:
                let indx = Number(arrayCommand.shift());
                addMany(array, indx, arrayCommand.map(Number));
                break;
            case `contains`:
                console.log(contains(array, Number(arrayCommand[0])));
                break;
            case `remove`:
                remove(array, Number(arrayCommand[0]));
                break;
            case `shift`:
                shift(array, Number(arrayCommand[0]));
                break;
            case `sumPairs`:
                array = sumPair(array);
                break;
        }
        i++;
    }

    console.log(`[ ${array.join(`, `)} ]`);

    function add(arr, index, element) {
        arr.splice(index, 0, element);
    }

    function addMany(arr, index, elements) {
        for (let elToAdd of elements) {
            arr.splice(index, 0, elToAdd);
            index++;
        }
    }

    function contains(arr, element) {
        return arr.indexOf(element);
    }

    function remove(arr, index) {
        arr.splice(index, 1);
    }

    function shift(arr, position) {
        for (let i = 0; i < position; i++) {
            arr.push(arr.shift());
        }
    }

    function sumPair(arr) {
        let sum = [];
        while (arr.length > 0) {
            let firstElement = arr.shift();
            if (arr.length === 0) {
                sum.push(firstElement);
                break;
            }
            let secondElement = arr.shift();
            sum.push(firstElement + secondElement);
        }
        return sum;
    }
}

arrayManipulator(
    [1, 2, 4, 5, 6, 7], 
    ["add 1 8", "contains 1", "contains -3", "print"]
);

arrayManipulator(
    [1, 2, 3, 4, 5], 
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);