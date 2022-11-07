// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return ` ![Github license](https://img.shields.io/badge/License-${license}-blue)`;
  }
  
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None') {
    return `- [Licensing](#licensing)`;
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license != 'None') {
    return `## Licensing
This project is licensed under the ${license} license.`
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licensing)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  ${renderLicenseLink(data.licensing)}
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ${renderLicenseSection(data.licensing)}

  ## Questions:
  If you have any questions, contact me here:
  - Email: ${data.email}

  And if you want to see my additonal work, check out my Github:
  - Github: [${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
