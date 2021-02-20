const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let employees = [];

function startQuestions() {
    console.log("Please complete the questions.")
    inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "What is the Manager's first name?"
        },
        {
            type: "input",
            name: "lastname",
            message: "What is the Manager's Last name?"
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "office-buidling",
            message: "What is this manager's office builidng number?"
        }
    ]).then(function(response1) {
        const manager = new Manager(response1.firstname,
                                    response1.lastname,
                                    response1.id,
                                    response1.email,
                                    response1.office);
        employees.push(manager);    
        console.log("___________________________________________");
        inquirer.prompt ([    
           {
            type: "list",
            name: "role",
            message: "Would you like to add another employee?",
            choices: [
                "No",
                "Engineer",
                "Intern"
            ]
           }
        ]).then(function(response2) {
            switch(response2.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break; 
                default: 
                    buildTeam();    
            } 
        })     
      
    }) 
}  

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "What is this employee's first name?"
        },
        {
            type: "input",
            name: "lastname",
            message: "Last name?"
        },
        {
            type: "input",
            name: "id",
            message: "ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is this engineer's Github username?"
        }
    ]).then(function(response3) {
        const engineer = new Engineer(response3.firstname,
                                      response3.lastname,
                                      response3.id,
                                      response3.email,
                                      response3.github);
        employees.push(engineer);    
        
        console.log("___________________________________________");
        inquirer.prompt ([    
           {
            type: "list",
            name: "role",
            message: "Would you like to add another employee?",
            choices: [
                "No",
                "Engineer",
                "Intern"
            ]
           }
        ]).then(function(response4) {
            switch(response4.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break; 
                default: 
                    buildTeam();    
            } 
        })     
      
    }) 
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "What is this employee's first name?"
        },
        {
            type: "input",
            name: "lastname",
            message: "Last name?"
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is this employees school?"
        }
    ]).then(function(response5) {
        const intern = new Intern(response5.firstname,
                                  response5.lastname,
                                  response5.id,
                                  response5.email,
                                  response5.school);
        employees.push(intern);    

        console.log("___________________________________________");
        inquirer.prompt ([    
           {
            type: "list",
            name: "role",
            message: "Would you like to add another employee?",
            choices: [
                "No",
                "Engineer",
                "Intern"
            ]
           }
        ]).then(function(response6) {
            switch(response6.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break; 
                default: 
                    buildTeam();    
            } 
        })     
      
    }) 
}



function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath,render(employees),"utf-8")
}

startQuestions();