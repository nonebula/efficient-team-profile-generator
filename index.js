const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const questions = [
  // manager
  {
    type: "input",
    name: "managerName",
    message: "What's the Team Manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What's the Team Manager's employee ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What's the Team Manager's email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What's the Team Manager's office number?",
  },

  // Choose member of staff
  {
    type: "list",
    name: "memberType",
    message: "Choose your option:",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team"],
  },

  // engineer
  {
    type: "input",
    name: "engineerName",
    message: "What's the Engineer's name?",
    when: (answers) => answers.memberType === "Add an Engineer",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What's the Engineer's employee ID?",
    when: (answers) => answers.memberType === "Add an Engineer",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What's the Engineer's email address?",
    when: (answers) => answers.memberType === "Add an Engineer",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What's the Engineer's GitHub Username?",
    when: (answers) => answers.memberType === "Add an Engineer",
  },

  // Intern
  {
    type: "input",
    name: "internName",
    message: "What's the Intern's name?",
    when: (answers) => answers.memberType === "Add an Intern",
  },
  {
    type: "input",
    name: "internId",
    message: "What's the Intern's employee ID?",
    when: (answers) => answers.memberType === "Add an Intern",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What's the Intern's email address?",
    when: (answers) => answers.memberType === "Add an Intern",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What's the Intern's school name?",
    when: (answers) => answers.memberType === "Add an Intern",
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    let team = [];

    // Create Manager instance
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    team.push(manager);

    // Create Engineer instance if selected
    if (answers.memberType === "Add an Engineer") {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      team.push(engineer);
    }

    // Create Intern instance if selected
    if (answers.memberType === "Add an Intern") {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      team.push(intern);
    }

    // Call render function and create HTML
    const renderedHTML = render(team);

    // Write HTML to a file (team.html)
    writeToFile(outputPath, renderedHTML);
  });
}

// function call to initialize program
init();