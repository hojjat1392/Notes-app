const validator = require('validator');
const chalk = require('chalk');


const getNotes = require('./notes');


const note = getNotes('Hi my name is hojjat')

console.log(chalk.red.inverse("Error!"));

 