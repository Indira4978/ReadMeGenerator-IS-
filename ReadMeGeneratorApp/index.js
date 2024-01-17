const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of the project?",
  },
  {
    type: "list",
    name: "License",
    message: "Which license for the project",
    choices: ["1", "2"],
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of the project:",
  },
  {
    type: "input",
    name: "why",
    message: "Why was the project built ?",
  },
  {
    type: "input",
    name: "what",
    message: "What problem does the project solve:",
  },
  {
    type: "input",
    name: "Learning",
    message: "What was learnt during the project completion:",
  },
  {
    type: "input",
    name: "Table of content",
    message: "Insert table of Content if needed :",
  },
  {
    type: "input",
    name: "Installation",
    message: "Outline the steps required to install the app:",
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use:",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});

// // function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// // function to initialize program
// function init() {
//   inquirer.createPromptModule(questions).then()
// }

// // function call to initialize program
// init();
