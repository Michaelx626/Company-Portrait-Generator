const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {
  generateHTML,
  generateManager,
  generateEngineer,
  generateIntern,
  generateEnding,
} = require("./src/htmlTemplate");

const displayNextQuestions = () => {
  setTimeout(userChoices, 1000);
};

const userInputs = (data) => {
  if (data.choices === "Manager") {
    const managerCard = generateManager(data);
    fs.appendFile(path.join("dist", "index.html"), managerCard, (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully created a Manager Role! 🚀")
    );
  }
  if (data.choices === "Engineer") {
    const engineerCard = generateEngineer(data);
    fs.appendFile(path.join("dist", "index.html"), engineerCard, (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully created an Engineer Role! 🚀")
    );
  }
  if (data.choices === "Intern") {
    const internCard = generateIntern(data);
    fs.appendFile(path.join("dist", "index.html"), internCard, (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully created an Intern Role! 🚀")
    );
  }
  if (data.again === "Yes") {
    displayNextQuestions();
  }
  if (data.choices === "None" || data.again === "No") {
    const ending = generateEnding();
    fs.appendFile(path.join("dist", "index.html"), ending, (err) =>
      err ? console.log(err) : console.log("Thank you! Goodbye! 👋")
    );
  }
};

const roleQuestions = [
  {
    name: "choices",
    type: "rawlist",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern", "None"],
  },
  {
    name: "managerName",
    type: "input",
    message: "What is your name?",
    when: (answer) => answer.choices === "Manager",
  },
  {
    name: "managerID",
    type: "input",
    message: "What is your ID?",
    when: (answer) => answer.choices === "Manager",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is your email?",
    when: (answer) => answer.choices === "Manager",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
    when: (answer) => answer.choices === "Manager",
  },
  {
    name: "engineerName",
    type: "input",
    message: "What is your name?",
    when: (answer) => answer.choices === "Engineer",
  },
  {
    name: "engineerID",
    type: "input",
    message: "What is your ID?",
    when: (answer) => answer.choices === "Engineer",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "What is your email?",
    when: (answer) => answer.choices === "Engineer",
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub url?",
    when: (answer) => answer.choices === "Engineer",
  },
  {
    name: "internName",
    type: "input",
    message: "What is your name?",
    when: (answer) => answer.choices === "Intern",
  },
  {
    name: "internID",
    type: "input",
    message: "What is your ID?",
    when: (answer) => answer.choices === "Intern",
  },
  {
    name: "internEmail",
    type: "input",
    message: "What is your email?",
    when: (answer) => answer.choices === "Intern",
  },
  {
    name: "school",
    type: "input",
    message: "Where did you attend school?",
    when: (answer) => answer.choices === "Intern",
  },
  {
    name: "again",
    type: "rawlist",
    message: "Would you like to enter another role?",
    choices: ["Yes", "No"],
    when: (answer) => answer.choices !== "None",
  },
];

const init = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Who's team is this?",
      },
    ])
    .then((data) => {
      const generate = generateHTML(data);

      fs.writeFile(path.join("dist", "index.html"), generate, (err) =>
        err
          ? console.log(err)
          : console.log("You have successfully created your template! 🚀")
      );

      displayNextQuestions();
    });
};

const userChoices = () => {
  inquirer.prompt(roleQuestions).then(userInputs);
};

init();
