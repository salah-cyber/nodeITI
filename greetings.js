function displayGreeting(name) {
    return `hello ${name}`;
}

let name = process.argv[2];
let msg = displayGreeting(name);
console.log(msg);
