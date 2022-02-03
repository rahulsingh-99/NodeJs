const chalk = require("chalk");

// console.log(chalk.green.inverse("Hello world!"));

const validator = require("validator");
const result = validator.isEmail(`rahulrahul.com`); //*isMobilePhone(str [, locale [, options]])
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));
