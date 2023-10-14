function arrayManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let commandParts = commands[i].split(' ');
        let action = commandParts[0];

        switch (action) {
            case 'add':
                let addIndex = parseInt(commandParts[1]);
                let addElement = parseInt(commandParts[2]);
                arr.splice(addIndex, 0, addElement);
                break;
            case 'addMany':
                let addManyIndex = parseInt(commandParts[1]);
                let addManyElements = commandParts.slice(2).map(Number);
                for (let j = 0; j < addManyElements.length; j++) {
                    arr.splice(addManyIndex + j, 0, addManyElements[j]);
                }
                break;
            case 'contains':
                console.log(arr.indexOf(parseInt(commandParts[1])));
                break;
            case 'remove':
                arr.splice(parseInt(commandParts[1]), 1);
                break;
            case 'shift':
                let positions = parseInt(commandParts[1]);
                for (let k = 0; k < positions; k++) {
                    arr.push(arr.shift());
                }
                break;
            case 'sumPairs':
                let newArr = [];
                while (arr.length > 0) {
                    let a = arr.shift() || 0;
                    let b = arr.shift() || 0;
                    newArr.push(a + b);
                }
                arr = newArr;
                break;
            case 'print':
                console.log('[ ' + arr.join(', ') + ' ]');
                return;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);