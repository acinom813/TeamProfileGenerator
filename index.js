const fs = require('fs');
const inquirer = require('inquirer');
const style = require("output/style.css");
const { employees } = require('./lib/employee');
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

let finalTeamArray = [];

function startApp() {
    startHtml();
    addMembers();
}


function addMembers() {
    inquirer.prompt ([
        {
            message: " Please build your team. Enter team member's name",
            name: "name"
        },
        {
            type: "list",
            message: "Select team member's role.",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role"
        },
        {
            message: "Enter team member's id.",
            name: "id"
        },
        {
            message: "Enter team member's email address",
            name: "email" 
        }])

    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if(role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        
        }])

        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager (name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                }else {
                    finishHtml();
                }
            });
        });
    });

 function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewpoint" content="width=device width, inital-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge>
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
        <body>
        <div class ="header-banner" >
        <h1>Team Profile</h1>
        </div>

    <div class = "card-container">

        <div class="card-banner" style="width: 18rem;"> `;
    fs.write("./output/team.html", html, function(err) {
        if(err){
            console.log(err);
        }
    });
        console.log("start");

}
        function addHtml(member) {
            return new Promise (function(resolve, reject){
                const name = member.getName();
                const role = member.getRole();
                const id = member.getId();
                const email = member.getEmail();
                let data = "";
                if (role === "Engineer") {
                    const gitHub = member.getGithub();
                    data = ``
                }
            })
            
            
        }
   
   
   
   
    
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
    }

        startApp();
