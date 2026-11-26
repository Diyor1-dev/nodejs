//module package EXTERNAL
/*const moment =require('moment');


setInterval(()=> {
const time =moment ().format();
console.log(`hozirgi vaqt ${time}`);
}, 5000);*/




/*const inquirer = require('inquirer');
inquirer
 .prompt([{type: "input", name: "raqam", message: "raqamni kiriting"}])
 .then((answer) => {
    console.log("men kiritgan raqam qiymati", answer.raqam);
})
.catch((err) => console.log(err));

*/

const validator = require("validator");
const test = validator.isEmail("mathew@mail.com");

console.log("test", test);


const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:", random);

const chalk = require("chalk");
const log = console.log;
log(chalk.blue("hello") + random + chalk.red("!")); 
