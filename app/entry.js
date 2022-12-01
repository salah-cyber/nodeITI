// npm init ->> package.json  -> important file -> npm install -> to install packages in the file
// entry file for app ->> entry.js
// npm install moment  ->> package-lock.json
// "moment": "^2.29.4" --> ^ to stop major updatesconst moment = require('moment');

// moment package used server an dclient side
var now = moment();
console.log(now);
console.log(moment().format("[Today is] dddd") );
console.log(moment().add(7, 'days').add(1, 'months').format("[Today is] dddd,[month is] MMMM"));
console.log(moment().local('ar'));


//npm cmds
//npm i packageName@versionNumber
//npm view PACKAGENAME versions
//npm updates
//npm list 
//npm list -g
//npm outdated
//np outdated -g
//npm update 
//npm update -g
//npm view PACKAGE dependencies
//npm i PACKAGE --save-dev
//npm uninstall PACKAGE
//npm uninstall PACKAGE --save-dev