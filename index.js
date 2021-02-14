const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'mgrname'
    },
    {
        type: 'input',
        message:'What is the team managers id?',
        name: "mgrid"
    },
    {
        type: "input",
        message: "What is the team managers email?",
        name: "mgremail"
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'mgroffice'
    },
    {
        type: 'list',
        message: 'Which team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team mebers.'],
        name: 'add'
    },
    {
        type: 'input',
        message: "What is your engineers name?",
        name: 'engrname'
    },
    {
        type: 'input',
        message: 'What is your engineers id?',
        name: 'engrid'
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'engremail'
    },
    {
        type: 'input',
        message: 'What is your engineers GitHub username?',
        name: 'engrusername'
    },
    {
        type: 'input',
        message: 'Which team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team mebers.'],
        name: "add"
    },
    {
        type: 'input',
        message: 'What is your interns name?',
        name:'intername'
    },
    {
        type: 'input',
        message: 'What is your interns id?',
        name:'internid'
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'internemail'
    },
    {
        type: 'input',
        message: 'What is your interns school?',
        name: 'internschool'
    },
    {
        type: 'input',
        message: 'Which team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team mebers.'],
        name: "add"
    },
])