import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";
import { Employee } from "./lib/Engineer.js";

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const manager = new Manager(name, id, email, officeNumber);
const intern = new Intern(name, id, email, school);
const engineer = new Engineer(name, id, email, github);

const questions = [
  // manager
  {
    type: "input",
    name: "Name",
    message: "What's the Team Manager's name?",
  },
  {
    type: "input",
    name: "Employee ID",
    message: "What's the Team Manager's employee ID?",
  },
  {
    type: "input",
    name: "Email Address",
    message: "What's the Team Manager's email address?",
  },
  {
    type: "input",
    name: "Office Number",
    message: "What's the Team Manager's office number?",
  },

  // Choose member of staff
  {
    type: "list",
    name: "Options",
    message: "Choose your option:",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team"],
  },

  // engineer
  {
    type: "input",
    name: "Name",
    message: "What's the Engineer's name?",
  },
  {
    type: "input",
    name: "Employee ID",
    message: "What's the Engineer's employee ID?",
  },
  {
    type: "input",
    name: "Email",
    message: "What's the Engineer's email address?",
  },
  {
    type: "input",
    name: "GitHub Username",
    message: "What's the Engineer's GitHub Username?",
  },

  // Intern
  {
    type: "input",
    name: "Name",
    message: "What's the Intern's name?",
  },
  {
    type: "input",
    name: "Employee ID",
    message: "What's the Intern's employee ID?",
  },
  {
    type: "input",
    name: "Email",
    message: "What's the Intern's email address?",
  },
  {
    type: "input",
    name: "GitHub Username",
    message: "What's the Intern's school name?",
  },
];

// function to write HTML file
function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFile(filePath, data, (err) =>
    err
      ? console.error(err)
      : console.log(`${fileName} generated successfully!`)
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const htmlContent = render(answers);
    writeToFile("team.html", htmlContent);
  });
}

// function call to initialize program
init();
