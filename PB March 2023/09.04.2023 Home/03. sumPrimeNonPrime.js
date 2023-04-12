function sumPrimeNonPrime(input) {
    let index = 0;
    let num = input[index];
    index++;

    let primeNums = 0;
    let nonPrimeNums = 0;

    while (num !== 'stop') {
        let number = parseInt(num);
        if (number < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;
            if (number <= 1) {
                isPrime = false;
            } else {
                for (let i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primeNums += number;
            } else {
                nonPrimeNums += number;
            }
        }
        num = input[index];
        index++;
    }

    console.log("Sum of all prime numbers is: " + primeNums);
    console.log("Sum of all non prime numbers is: " + nonPrimeNums);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);

