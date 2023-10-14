function manipulator(arr, commands) {

    function add(params) {
        arr.splice(params[0], 0, params[1]);
    }

    function addMany(params) {
        const index = params[0];
        const elementsToAdd = params.slice(1);
        for(let i = 0; i < elementsToAdd.length; i++) {
            arr.splice(index + i, 0, elementsToAdd[i]);
        }
    }
    
    function contains(params) {
        console.log(arr.indexOf(params[0]));
    }

    function remove(params) {
        arr.splice(params[0], 1);
    }

    function shift(params) {
        Array.prototype.push.apply(arr, arr.splice(0, params[0]));
    }    

    function sumPairs() {
        let newArr = [];
        for (let i = 0; i < arr.length; i+=2) {
            newArr.push((arr[i] || 0) + (arr[i + 1] || 0));
        }
        arr = newArr;
    }

    function print() {
        console.log("[ " + arr.join(", ") + " ]");
    }

    const actions = {
        add: add,
        addMany: addMany,
        contains: contains,
        remove: remove,
        shift: shift,
        sumPairs: sumPairs,
        print: print
    };

    commands.forEach(function(command) {
        const splitCommand = command.split(' ');
        const action = splitCommand[0];
        const params = splitCommand.slice(1).map(Number);
        
        if (typeof actions[action] === "function") {
            actions[action](params);
        } else {
            console.error(`Command not recognized: ${action}`);
        }
    });
}

manipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);


//Gives 81/100 in Judge - https://judge.softuni.org/Contests/Compete/Index/1299#7

//Need to come back and fix it!