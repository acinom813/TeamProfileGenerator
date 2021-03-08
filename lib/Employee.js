

class Employee {
    constructor (name, id, email,) {
        this.name = name;
        this.id = id;
        this. email = email;
    }

getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return "Employee";
}
};

const employees = [
    new Employee ("Bethany Brown", 6, "bbrown@job.com"),
    new Employee ("Jason Land", 7, "jland@job.com")
];

module.exports = {
    Employee,
    employees
};
