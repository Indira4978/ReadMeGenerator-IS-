const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
  },
  {
    type: "list",
    name: "License",
    message: "Which license for the project",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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
    name: "learnings",
    message: "What was learnt during the project completion:",
  },
  {
    type: "input",
    name: "table",
    message: "Insert table of Content if needed :",
  },
  {
    type: "input",
    name: "installation",
    message: "Outline the steps required to install the app:",
  },
  {
    type: "input",
    name: "use",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "credits",
    message: "Include credits and references:",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMeDoc = generateMarkdown(answers);

    fs.writeFile("./README.md", readMeDoc, (err) => {
      if (err) throw err;
      console.log("README.md file created!");
    });
  });
}
init();
