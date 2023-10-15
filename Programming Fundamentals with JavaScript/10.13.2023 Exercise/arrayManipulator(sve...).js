//original code by sve...

function arrayManipulator(array, commands) {

    let i = 0;

    while (commands[i] !== `print`) {

        let fullCommand = commands[i]
        let arrayCommand = fullCommand.split(` `)//цялата команда разделена в масив
        let command = arrayCommand.shift(); // само текстовата команда,

        switch (command) {
            case `add`:
                add(array, arrayCommand[0], arrayCommand[1]);
                break;

            case `addMany`:
                let indx = arrayCommand.shift();
                addMany(array, Number(indx), arrayCommand)
                break;

            case `contains`:
                console.log(contains(array, arrayCommand[0]));
                break;

            case `remove`:
                remove(array, arrayCommand[0]);
                break;

            case `shift`:
                shift(array, arrayCommand[0]);
                break;

            case `sumPairs`:
                array = sumPair(array);
                break;
        }

        i++;
    }

    console.log(`[ ${array.map(Number).join(`, `)} ]`);

    function add(arr, index, element) {
        return arr.splice(index, 0, element)
    }
    function addMany(arr, index, element) {
        for (let elToAdd of element) {
            arr.splice(index, 0, elToAdd)
            index++
        };

        return arr;
    }

    function contains(arr, element) {
        let result = arr.indexOf(Number(element));
        return result;
    }

    function remove(arr, index) {
        let result = arr.splice(index, 1);

        return result;
    }

    function shift(arr, position) {
        for (let i = 0; i < Number(position); i++) {
            arr.push(arr.shift())
        }

        return arr
    }

    function sumPair(arr) {

        let numbArr = arr.map(Number)
        let sum = [];

        while (numbArr.length > 0) {

            let firstElement = numbArr.shift();
            if (numbArr.length == 0) {
                sum.push(firstElement);
                break;
            }
            let secondElement = numbArr.shift();
            sum.push(firstElement + secondElement)
        }

        return sum;
    }
}

arrayManipulator[1, 2, 4, 5, 6, 7],
["add 1 8", "contains 1", "contains -3", "print"];

arrayManipulator[1, 2, 3, 4, 5],
["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"];