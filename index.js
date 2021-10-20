const createHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter the manager ID.'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter the manager email.'
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter the manager Github.'
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number.'
        },

    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role for your job.',
            choices: ['Engineer', 'Intern']

        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'

        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employees ID'

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employees email'

        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the employees Github'

        },
        {
            type: 'input',
            name: 'school',
            when: (input) => input.role === 'Intern',
            message: 'Please enter the employees ID',

        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Are there any other members you would like to add?',
            default: false

        }
    ])
        .then(employeeData => {

            let { name, id, email, role, github, school, confirmEmployee } = employeeData;

            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github)

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, github, school);

                console.log(employee);

            }

            teamArray.push(employee);

            if (confirmEmployee) {
                return addEmployee(teamArray);

            } else {
                return teamArray;
            };
        })
};

const writeFile = data => {
    fs.writeFile('./dist/inidex.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile is complete!');
        };
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return createHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

