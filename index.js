const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select the license for this project.",
    choices: ["none", "MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3"]
  },
  {
    type: "input",
    name: "require",
    message: "List project dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "What languages are used in this project?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Are there any additional contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
  {
    type: "input",
    name: "creator",
    message: "Enter your GitHub Username.",
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Succesfully creating README.md file!");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

init();
