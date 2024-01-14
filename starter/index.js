const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Include your table of contents:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators:',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select the license type for your project:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators:',
  },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
