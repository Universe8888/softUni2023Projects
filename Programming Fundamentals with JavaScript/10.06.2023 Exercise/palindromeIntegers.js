function checkPalindromes(numbers) {
    for (let number of numbers) {
        const strNum = number.toString();
        const isPalindrome = strNum === strNum.split('').reverse().join('');
        console.log(isPalindrome);
    }
}

checkPalindromes([123, 323, 421, 121]);