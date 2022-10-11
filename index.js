const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const managerQuestions = [
  {
    type:'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID?',
  },
  {
    type:'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type:'input',
    name: 'officeNumber',
    message: 'What is your office number?',
  }
]

const engineerQuestions = [
  {
    type:'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID?',
  },
  {
    type:'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  }
]

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Wherer did you go to school?',
  }
]

const newMember = [
  {
    type:'list',
    name:'memberType',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Intern', 'None'],
  }
]

function addMember(questions, type) {
  let uniqueQuestion;
  inquirer.prompt(questions)
    .then((answers)=>{
      switch(type){
        case Engineer:
          uniqueQuestion = answers.github;
          break;
        case Intern:
          uniqueQuestion = answers.school;
          break;
        default:
          uniqueQuestion = answers.officeNumber;
          break;
      }
      const newEmployee = new type(answers.name, answers.id, answers.email, uniqueQuestions)
      team.push(newEmployee)
      additionalMembers()
    })
}

function additionalMembers() {
  inquirer.prompt(newMember)
  .then((answers)=>{
    switch(answers.memberType){
      case Engineer:
        addMember(engineerQuestions, Engineer);
        break;
      case Intern:
        addMember(internQuestions, Intern);
        break;
      default:
        //call function to generate html
      const outputHTML = generateHTML(team);
      fs.writeFile('./dist.team.html', outputHTML, (err)=>
      err? console.log(err):console.log('HTML created successfully!'))
    }
  })
}


const readmeFile = generateReadme(answers);
fs.writeFile('./utils/readme.md', readmeFile, (err)=>
err? console.log(err):console.log('readme.md successfully created!')
);

  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
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
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
