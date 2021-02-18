const fs = require('fs');
const inquirer = require('inquirer');
const style = require(".output/style.css")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

let finalTeamArray = [];

function openingMsg(){
    inquirer.prompt ([
        {
            message: " Please build your team.",
            name: "teamname"
        }
    ])
    .then(function(data) {
        const teamName = data.teamName
        finalTeamArray.push(teamName)
        addManager();
    })
}
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "mgrname"
        },
        {
            type: "input",
            message:"What is the team manager's id?",
            name: "mgrid"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "mgremail"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "mgroffice"
        },
    ])

    .then(function (data) {

            const name = data.mgrname
            const id = data.mgrid
            const email = data.mgremail
            const officeNumber = data.mgroffice
            const teamMember = new Manager (mgrname, mgid, mgremail, mgroffice)
            finalTeamArray.push(teamMeber)
            addTeamMembers();
    });
}

function selectNewMember() {
   inquirer.prompt ([
    {
        type: "list",
        message: "Which team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I dont want to add any more team mebers.'],
        name: "addMember"
    }
])
    .then(function (data) {
        switch (data.addMember) {
            case "Yes, add an engineer.":
                addEngineer();
                break;

            case "Yes, add an intern.":
                addIntern();
                break;

            case "No, my team is complete":
                formTeam();
                break;
        }
    });

}

function addEngineer() {
    inquirer.prompt ([

        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engrname"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engrid"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engremail"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engrusername"
        }
    ])

    .then(function (data) {
        const name = data.engrname
        const id = data.engrid
        const email = data.engremail
        const github = data.engrusername
        const teamMeber = new Engineer (engrname, engrid, engremail, engrusername)
        finalTeamArray.push(teamMeber)
        addTeamMembers()
    });
};

function addIntern() {
    inquirer.prompt ([
    
    {
        type: "input",
        message: "What is your intern's name?",
        name:"intername"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name:"internid"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internemail"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "internschool"
    }
    
])

    .then(function (data){
        const name = data.intername
        const id = finalTeamArray.length +1
        const email = data.email
        const school = data.school
        const teamMeber = newIntern (intername, internid, interemail, internschool)
        finalTeamArray.push(teamMeber)
        addTeamMembers()

    });

};

function formTeam() {
    console.log ("Team formation complete.")

    const htmlArray = []
    const htmlBeginning =`
    `
}