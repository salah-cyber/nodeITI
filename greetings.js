// var process = require('process');  عايز تكتبها اكتبها 
function displayGreeting(name) {
    return `hello ${name}`;
}

let name = process.argv[2];
let msg = displayGreeting(name);
console.log(msg);

//process.env
process.stdout.write('this is simple ')
process.stdout.write('msg')
//console.log(process);
