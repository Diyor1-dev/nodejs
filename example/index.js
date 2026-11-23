//Module package Core 
let number = 0;
setInterval(function (){
    console.log("hisob",number);
    number ++;
}, 1000);

const fs = require('fs');
const data = fs.readFileSync("./input.txt", 'utf8');
console.log(data);

console.log("***************")

fs.writeFileSync("./input.txt", `${data} \n\t\t by Methew`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);


//Module packege External
//Modul package FILE