const Employee = require("./employee")

class Engineer extends Employee{
    constructor (name, id, email, username) {
        super (name, id, email)
        this.username = username;
        this.title = "Engineer";
    }

    getUsername() {
        return this.username;
    }
    getTitle() {
        return this.title;
    }
};

    const engineers = [
        new Engineer ("John Smith", 004, "jsmith@job.com", "JSmith92"),
        new Engineer ("Allie Gold", 005, "agold@job.com", "AllGold88")
    ];

    module.exports = {
        Engineer,
        engineers
    };
