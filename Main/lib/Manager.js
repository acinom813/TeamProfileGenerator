const Employee = require("./employee")

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.title = "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getTitle() {
        return this.title;
    }
};

    const managers = [
        new Manager ("Jona Flemming", 010, "jflemming@job.com", 40),
        new Manager ("Kelis White", 011, "kwhite@job.com", 41)
    ];

    module.exports = {
        Manager,
        managers
    };
