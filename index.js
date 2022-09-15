// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, license, github }) =>
  
// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            Selection: 'What type of License do you want to use?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
          },
        
    ])
    .then((answers) => {
      const htmlPageContent = generateReadMe(answers);
    
      fs.writeFile('readme.md', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
      );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile('readme.md', htmlPageContent)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

