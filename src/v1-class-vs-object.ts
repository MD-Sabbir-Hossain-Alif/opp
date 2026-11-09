// interface Employee {
//     name: string
//     baseSalary: number
// }

// const employee = {
//     name: "Sabbir",
//     baseSalary: 22000,
// }

// const employee2 = {
//     name: "Hossain",
//     baseSalary: 22000,
// };

class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name
        this.baseSalary = baseSalary
    }
}

const employee = new Employee("Sabbir", 22000);
const employee2 = new Employee("Hossain", 20000);
console.log(employee, employee2);
