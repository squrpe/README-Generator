// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [

    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },

    // Description of the project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },

    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide information on how to install to continue!');
                return false;
            }
        }
    },

    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },

    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },

    // Testing Instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How should one test the usage of such project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use testing on said project!');
                return false;
            }
        }
    },

    // Credits 
    {
        type: 'input',
        name: 'credits',
        message: 'Do you need to credit any other creators/websites? If so, do that here, otherwise press enter:',
    },

    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project:',
        choices: ['Apache_2.0', 'MIT', 'Boost_1.0', 'Eclipse_2.0', 'MPL_2.0', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },

    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(path.join(process.cwd(),'/dist',fileName), data, (error) => {
        if (error)
            throw error;
        console.log('Success! Information transferred to the README!')
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });

}

// Function call to initialize app
init();
