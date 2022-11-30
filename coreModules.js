//file system module
//READ FILES
const fs = require('fs')
//console.log(fs);
let data = fs.readFileSync('./message.txt')
console.log(data);
//<Buffer 68 65 6c 6c 6f 20 65 76 65 72 79 6f 6e 65>
// الملف اتحفظ على هيئة صفر وواحد فلما اقراه لازم احدد التكويد االلي انا عايز احولهم ليه علشان اعرف اقراهم
let DATA = fs.readFileSync('./message.txt','utf-8')
console.log(DATA);
console.log(data.toString());// default encoding of tostring is utf-8


//sync = blocking
//aync = non-blocking
//async is better
// any async fn must hv a callback fun
let file = fs.readFile('./message.txt', 'utf-8',function (err, info) {
    // دايما اول باراميتر في كل الدوال الغير متزامنة بتكون الخطا لو حصل 
    // والتاني هنا هيبقى المعلومات اللي رجعت 
    if (err) {
        console.log('error occured',err);
    }else{
        console.log(info);
    }
})



// WRITE FILES
fs.writeFile('./new.txt','this a simple txt',function (err) {
    if (err) {
        console.log('error occured',err);
}}); // new file 


// APPEND FILE
// لو عاوز ازود علىالملف كلام 
//fs.appendFile
//fs.appendFileSync
fs.appendFile('./new.txt',' this a simple txt',function (err) {
    if (err) {
        console.log('error occured',err);
}});

//DELETE
fs.unlink('./new.txt',function (err) {
    if (err) {
        console.log('error occured',err);
}});


// async 
fs.writeFile('./a.txt','aaaaaaaaaaa',(err) => {
    if (err) {
        console.log('error occured',err);
}});
fs.appendFile('./a.txt','bbbbbbbbbbb',(err) => {
    if (err) {
        console.log('error occured',err);
}});
fs.writeFile('./a.txt','cccccccccccc',(err) => {
    if (err) {
        console.log('error occured',err);
}});
fs.writeFile('./a.txt','aaaaaaaaaaa',(err) => {
    if (err) {
        console.log('zzzzzzzzzzz',err);
}});  
//every time u run u get different file -> async
 
//sync to keep sequence
// لو عندي ترتيب معين عايز امشي بيه 
fs.writeFile('./b.txt','aaaaaaaaaaa',(err) => {
    if (err) {
    console.log('error occured',err);
    fs.appendFile('./b.txt','bbbbbbbbbbb',(err) => {
        if (err) {
            console.log('error occured',err);
            fs.appendFile('./b.txt','cccccccccccc',(err) => {
                if (err) {
                    console.log('error occured',err);
            }});
            
    }});
}});

//note diiference 
fs.writeFile('./c.txt','aaaaaaaaaaa',(err) => {
    if (err) 
    console.log('error occured',err);
    else{fs.appendFile('./c.txt','bbbbbbbbbbb',(err) => {
            if (err) 
            console.log('error occured',err);
                else{fs.appendFile('./c.txt','cccccccccccc',(err) => {
                    if (err) {
                    console.log('error occured',err);
                    }
                });}
            
            
    });}
});

//note diiference 
fs.writeFile('./d.txt','aaaaaaaaaaa',() => {
    fs.appendFile('./d.txt','bbbbbbbbbbb',() => {
                fs.appendFile('./d.txt','cccccccccccc',() => {
                });   
    });
});
// بعد ماتخلص انشا الملف وكتابة حرف الايه ضيف حرف البي ولما تخلص ضيف حرف السي 
// طبعا ده بيحصل لان الدوال sync
