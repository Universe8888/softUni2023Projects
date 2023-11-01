function schoolGrades(input) {
    const studentGrades = {};

    for (const item of input) {
        const [name, ...grades] = item.split(' ');
        if (!studentGrades[name]) {
            studentGrades[name] = [];
        }
        studentGrades[name].push(...grades.map(Number));
    }
    const result = [];
    for (const name in studentGrades) {
        const grades = studentGrades[name];
        const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
        result.push(`${name}: ${average}`);
    }

    return result.sort().join('\n');
}

console.log(schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']));

// console.log(schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']));