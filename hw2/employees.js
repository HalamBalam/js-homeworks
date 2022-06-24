const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

let avgSalary = employees.reduce((acc, item) => {
    return acc + item.salary;
}, 0) / employees.length;
console.log('Средняя зарплата ($): ' + avgSalary);

let employeesBySalary = employees.sort((a, b) => {
    return a.salary - b.salary;
});
console.log('Сотрудники по возрастанию з/п:');
console.log(employeesBySalary);

let oldEmployees = employees.filter(item => item.salary > 4500 && item.age > 25);
console.log('Сотрудники с з/п больше 4500$ и старше 25 лет:');
console.log(oldEmployees);