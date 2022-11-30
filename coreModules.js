// os module
// حجات خاصة بالنظام 
const os = require('os');
// const to prevent variable modification
console.log(`host name @ ${os.hostname()}`);
console.log(`arch @ ${os.arch()}`);
console.log(`platform @ ${os.platform()}`);
console.log(`type @ ${os.type()}`);
console.log(`free memor@ ${os.freemem()}`);
console.log(`total memory @ ${os.totalmem()}`);




// pathe module
const path = require('path');
console.log(path.parse(__filename));
// معرفة اسم الملف الحالي اللي هو الموديول لان الموديول عبارة عن ملف
let fileName = path.basename(__filename);
console.log(fileName); // اسم الملف الحالي
let filePath = path.join(__dirname,fileName);
console.log(filePath); // مسار الملف الحالي 
console.log(path.dirname(filePath)); //لمعرفة ام المجلد اللي فيه الموديول
console.log(`extension is ${path.extname(__filename)}`);
console.log(__filename);
console.log(__dirname);

//

