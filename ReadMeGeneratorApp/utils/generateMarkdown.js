// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## READ ME ##

**Project Title:** ${data.title}

**License:** ${data.License}

**Description:** ${data.description}

**Purpose:** ${data.why}

**Problem solved**${data.what}

**Learnings** ${data.learnings}

**Table of content (optional)** ${data.table}

**Installation instructions** ${data.installation}

**Application uses ** ${data.use}

**Credits and references used** ${data.credits}

`;
}

module.exports = generateMarkdown;
