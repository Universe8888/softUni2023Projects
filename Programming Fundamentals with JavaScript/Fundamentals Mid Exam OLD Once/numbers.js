function numbers(input) {

    let numbers = input.split(' ').map(Number);
    
    let average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
    
    let greaterThanAverage = numbers.filter(num => num > average);
    
    greaterThanAverage.sort((a, b) => b - a);
    
    if (greaterThanAverage.length === 0) {
        console.log("No");
    } else {
        console.log(greaterThanAverage.slice(0, 5).join(' '));
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('5 2 3 4 5');                      
numbers('1 2');                            
numbers('1');                       