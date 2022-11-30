const { log } = require('console');
const fs = require('fs');
//directories
//make new dir
fs.mkdir('newDir',(err) => {
    if (err) {
        console.log('err occured');        
    }else{
    process.chdir('./newDir')
    fs.writeFile('./childFile.txt', 'thi is a file inside a directory',(err)=>{
            if(err)
            console.log('err occured');
        })
    }});




//remove dir
fs.rmdir('./newDir',{ recursive: true },(err)=>{
    if (err) {
        console.log('err');
    }
}); 










//read dir
fs.readdir('./',(err,files)=>{
    if (err) {
        console.log('error');
    }else{
        console.log(files);
    }
})
// fs.readdir take dir and return err and files that i take them
// in a function a duse them