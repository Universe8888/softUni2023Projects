function organizeEmployees(input) {
    const companies = {};

    input.forEach(line => {
        const [company, employeeId] = line.split(' -> ');

        if (!companies[company]) {
            companies[company] = new Set();
        }

        companies[company].add(employeeId);
    });

    const sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(([company, employees]) => {
        console.log(company);
        employees.forEach(id => console.log(`-- ${id}`));
    });
}
organizeEmployees(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);