

class Employee {
    constructor (name, id, email,) {
        this.name = name;
        this.id = id;
        this.title = "Employee";
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
    return this.title;
}
};

const employees = [
    new Employee ("Bethany Brown", 006, "bbrown@job.com"),
    new Employee ("Jason Land", 007, "jland@job.com")
];

module.exports = {
    Employee,
    employees
};
