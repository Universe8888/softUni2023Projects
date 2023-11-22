function calculateFoodDuration(input) {
    const foodPattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let match;
    let output = [];

    while ((match = foodPattern.exec(input)) !== null) {
        const { item, date, calories } = match.groups;
        totalCalories += parseInt(calories, 10);
        output.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }

    const days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    output.forEach(item => console.log(item));
}

const inputString = '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|';
calculateFoodDuration(inputString);