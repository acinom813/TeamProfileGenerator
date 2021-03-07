const Employee = require("./employee")


class Intern extends Employee {

    constructor (name, id, email, school) {
       super(name, id, email)
        this.school = school;
        this.title = "Intern"
    }

    getSchool() {
        return this.school;
    }

    getTitle() {
        return this.title;
    }
};

    const interns = [
        new Intern ("David Ling", 08, "dling@unc.edu", "UNC"),
        new Intern ("Kirsten Harris", 09, "kharris@ncsu", "NCSU"),
    ];

    module.exports = {
        Intern,
        interns
    };
