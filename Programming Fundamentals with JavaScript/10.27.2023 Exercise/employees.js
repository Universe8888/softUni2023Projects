function createEmployeeList(names) {
    const employees = [];

    for (let name of names) {
        let personalNum = name.length;

        const employee = {
            employeeName: name,
            personalNum: personalNum
        };

        employees.push(employee);
    }

    for (let emp of employees) {
        console.log(`Name: ${emp.employeeName} -- Personal Number: ${emp.personalNum}`);
    }
}

createEmployeeList(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// createEmployeeList(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);