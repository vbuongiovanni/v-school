
// You are to create a collection of employee's information for your company. Each employee has the following attributes:
// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`
const employees = [];

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.
const Employee = function(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}\nJob Title: ${this.jobTitle}\nSalary: ${this.salary}\nstatus: ${this.status}\n\n`)

}

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
const jack = new Employee("Pete", "CEO", "124,234");
const jill = new Employee("Jill", "CFO", "112,242");
const pete = new Employee("Pete", "Engineer", "94,342");

// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
jill.status = "part time";
pete.status = "Contract";

// 3. Call the `printEmployeeForm` method for each employee
jack.printEmployeeForm();
jill.printEmployeeForm();
pete.printEmployeeForm();

// 4. Put the generated employees into the `employees` array using whichever method you prefer.
employees.push(jack);
employees.push(jill);
employees.push(pete);

console.log(employees);


