function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
        
        Licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
by ${data.name}
## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Questions
* My name is ${data.name}
* If you have any questions email me at ${data.email}
* Find more of my work at https://github.com/${data.creator}/
## Testing
\`\`\`
${data.test}
\`\`\`
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
