const Employee = require("./employee")

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github;
    
    }
    getRole() {
        return "Engineer";

    }
    getGithub() {
        return this.github;
    }
}

    const engineers = [
        new Engineer ("John Smith", 4, "jsmith@job.com", "JSmith92"),
        new Engineer ("Allie Gold", 5, "agold@job.com", "AllGold88")
    ];

    module.exports = {
        Engineer,
        engineers
    };
