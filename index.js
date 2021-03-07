const fs = require('fs');
const inquirer = require('inquirer');
//const style = require("output/style.css")

//const Employee = require("./lib/employee")
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
            name: "name"
        },
        {
            type: "input",
            message:"What is the team manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "mgroffice"
        },
    ])

    .then(function (data) {

            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.mgroffice
            const teamMember = new Manager (name, id,email, mgroffice)
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
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "username"
        }
    ])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.username
        const teamMeber = new Engineer (name, id, email, username)
        finalTeamArray.push(teamMeber)
        addTeamMembers()
    });
};

function addIntern() {
    inquirer.prompt ([
    
    {
        type: "input",
        message: "What is your intern's name?",
        name:"name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name:"id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
    
])

    .then(function (data){
        const name = data.name
        const id = finalTeamArray.length +1
        const email = data.email
        const school = data.school
        const teamMeber = newIntern (name, id, email, school)
        finalTeamArray.push(teamMeber)
        addTeamMembers()

    });

};

function formTeam() {
    console.log ("Team formation complete.")

    const htmlArray = []
    const htmlBeginning = `
   <!DOCTYPE html>
   <html lang="en">
   
   <head>
   <meta charset="UTF-8">
   <meta name="viewpoint" content="width=device width, inital-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge>
   <title>${finalTeamArray[0]}</title>
   <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="style.css">
   <style>
    ${style}
    </style>
    </head>
    
    <body>
         <div class="banner-bar">
            <h1>${finalTeamArray[0]}</h1>
        </div>
        <div class="card-container">
        `
            htmlArray.push(htmlBeginning);

            for(let i = 1; i < finalTeamArray.length; i++) {
                let object = `
                <div class="member-card">
                    <div class="card-top">
                        <h2>${finalTeamArray[i].name}</h2>
                        <h2>${finalTeamArray[i].title}</h2>
                    </div>
                <div class= "card-bottom">
                    <p>Employee ID: ${finalTeamArray[i].id}</p>
                    <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
                `
                    if(finalTeamArray[i].mgroffice) {
                        object +=`
                        <p>${finalTeamArray[i].mgroffice}</p>
                        `
                    }
                    if(finalTeamArray[i].username) {
                        object += `
                        <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
                    `
                    }
                    if(finalTeamArray[i].school){
                        object += `
                        <p>School: ${finalTeamArray[i].school}</p>
                        `
                    }
                    object =+ `
                    </div>
                    </div>
                    `
                    htmlArray.push(object)
            }

            const htmlEnd = `
                </div>
                </body>
                </html>
                `
            htmlArray.push(htmlEnd);

            fs.writeFile(`./team.html/${finalTeamArray[0]}.html`, htmlArray.join(""), function(err) {

            })
        }

        openingMsg();
