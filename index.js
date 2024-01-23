const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

function writeToFile(filePath, data) {
  fs.writeFileSync(filePath, data);
  console.log(`File written to: ${filePath}`);
}

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

  // engineer
  {
    type: "input",
    name: "engineerName",
    message: "What's the Engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What's the Engineer's employee ID?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What's the Engineer's email address?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What's the Engineer's GitHub Username?",
  },

  // Intern
  {
    type: "input",
    name: "internName",
    message: "What's the Intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What's the Intern's employee ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What's the Intern's email address?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What's the Intern's school name?",
  },

];

async function init() {
  let team = [];

  // Add Manager first
  const managerAnswers = await inquirer.prompt(questions.slice(0, 4)); // Only manager questions
  const manager = new Manager(
    managerAnswers.managerName,
    managerAnswers.managerId,
    managerAnswers.managerEmail,
    managerAnswers.managerOfficeNumber
  );
  team.push(manager);

  while (true) {
    const memberChoice = await inquirer.prompt([
      {
        type: "list",
        name: "memberType",
        message: "Choose your option:",
        choices: ["Add an Engineer", "Add an Intern", "Finish building the team"],
      },
    ]);

    if (memberChoice.memberType === "Finish building the team") {
      break;
    }

    const memberAnswers = await inquirer.prompt(
      memberChoice.memberType === "Add an Engineer"
        ? questions.slice(4, 8) // Engineer questions
        : questions.slice(8, 12) // Intern questions
    );

    // Create Engineer instance if selected
    if (memberChoice.memberType === "Add an Engineer") {
      const engineer = new Engineer(
        memberAnswers.engineerName,
        memberAnswers.engineerId,
        memberAnswers.engineerEmail,
        memberAnswers.engineerGithub
      );
      team.push(engineer);
    }

    // Create Intern instance if selected
    if (memberChoice.memberType === "Add an Intern") {
      const intern = new Intern(
        memberAnswers.internName,
        memberAnswers.internId,
        memberAnswers.internEmail,
        memberAnswers.internSchool
      );
      team.push(intern);
    }
  }

  // Call render function and create HTML
  const renderedHTML = render(team);

  // Write HTML to a file (team.html)
  writeToFile(outputPath, renderedHTML);
}

// function call to initialize program
init();