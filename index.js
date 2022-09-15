// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')
  
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project',
          },
          {
             type: 'input',
             name: 'license',
             message: 'What type of License do you want to use?',
             choices: ['Apache', 'Boost', 'BSD', 'MIT']
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Usage Information',
          },
          {
            type: 'input',
            name: 'contributors',
            message: 'Contributor Guidelines?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Tests?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
    ];
    // .then((answers) => {
    //   const htmlPageContent = generateReadMe(answers);
    inquirer.prompt(questions).then(data => {
      console.log(data)
      fs.writeFile('readme.md', generateMarkdown(data), (err) => {})
    });

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

