const inquirer = require('inquirer');
const fs = require('fs');
const holdHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

//Questions for the Manager
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
//Questions for the Engineer
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
//Questions for the Intern
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

//Questions for the addition of new team member
const newMember = [
  {
    type:'list',
    name:'memberType',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Intern', 'None'],
  }
]
//prompts the questions and applies the unique question for the chosen role
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
      const newEmployee = new type(answers.name, answers.id, answers.email, uniqueQuestion)
      team.push(newEmployee)
      additionalMembers()
    })
}
//selects the questions based on chosen role
function additionalMembers() {
  inquirer.prompt(newMember)
  .then((answers)=>{
    switch(answers.memberType){
      case 'Engineer':
        addMember(engineerQuestions, Engineer);
        break;
      case 'Intern':
        addMember(internQuestions, Intern);
        break;
      default:
        //call function to generate html
      const holdHtmlArr = holdHTML.generateHTML(team);
      fs.writeFile('./dist/team.html', holdHtmlArr.join(""), (err)=>
      err? console.log(err):console.log('HTML created successfully!'))
    }
  })
}

//starts the process
addMember(managerQuestions, Manager);
