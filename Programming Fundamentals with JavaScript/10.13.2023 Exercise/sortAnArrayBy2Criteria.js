function sortAnArrayByCriteria(arr) {
    arr.sort((a, b) => {
        
        const lengthDifference = a.length - b.length;

        if (lengthDifference !== 0) {
            return lengthDifference;
        }

        
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        if (aLower < bLower) {
            return -1;
        }
        if (aLower > bLower) {
            return 1;
        }

        
        return 0;
    });

    console.log(arr.join('\n'));
}

sortAnArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);