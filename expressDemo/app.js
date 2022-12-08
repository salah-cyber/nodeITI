// ترتيب الميدل ويير بيفرق معاي 
const express = require('express') 
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')
const helmet = require("helmet"); // notice change in response header in browser
const ejs = require('ejs');
const studentsRouter = require('./routes/students.js'); //1)) the first thing after client enter an endpoint 
const mongoose = require('mongoose'); // 
const userRouter = require("./routes/users")
const authRouter = require("./routes/login=auth")
const adminRouter = require("./routes/admin")
const errorMW = require("./middlewares/errorMW")

//..........................................................................................................................................................
app.use(helmet()); // 3rd party middleware not maintained by express
app.use(express.urlencoded({extended:true})) //parse url encoded payload
app.use(express.json()); // parse son sent by client throwgh reqest body
app.use(express.static('public')) //static files(css, js,img, html,..)
app.use(cookieParser());
//custom middleware (Application-level-middleware)
app.use('/api/users',userRouter);
app.use('/api/students',studentsRouter);
app.use('/api/login',authRouter);
app.use('/api/admin',adminRouter);
//error handling middleware , put after all middlewares
app.use(errorMW); //express error middleware 
//..........................................................................................................................................................
const port = process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening....!!! port ${port}`)}); 
//..........................................................................................................................................................
//connect هحط الاتصال هنا علشان مااكررش الاتصال بتاعنا في كل موودل
mongoose.connect("mongodb://127.0.0.1:27017/iti", { //mongoose connect fun return promise so i take this promise return in then function
            useNewUrlParser: true,
            useUnifiedTopology: true
        },)
        .then(() => {console.log('database connected..')})
        .catch((err) => {console.log(err)});
        //..........................................................................................................................................................
// app.all('*',(req,res,next)=>{
//     console.log('this middleware will be executed every time whatever the method or url');
//     next();
// })
//..........................................................................................................................................................
app.get('/'
       ,(req,res,next)=>{console.log('first middleWare');next();}
       ,(req,res,next)=>{console.log('second middleWare');next();}
       ,(req,res,next)=>{console.log('3rd middleWare');next();}
       ,(req,res,next)=>{console.log('4th middleWare');next();}
       ,(req,res)=>{res.sendFile(path.join(__dirname,'/main.html')); }
       )
//..........................................................................................................................................................
//app settings 
app.set('template engine', 'ejs');
app.set('views', 'template');
//..........................................................................................................................................................



app.get('/welcome.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'/welcome.html'));
})
//..........................................................................................................................................................
app.post('/welcome.html',(req,res)=>{
    // res.cookie('usernm',req.body.fnm);//session cookie // console->document.cookie
    res.cookie('usernm',Buffer.from(req.body.fnm).toString('base64'));// atob('encoded base64 tring') -> uncoded
    res.cookie('age','25',{httpOnly:true});//httponly = cookie will appear in http header not in console by document.cookie(js)
    res.send(`thanks ${req.body.fnm} ${req.body.lnm} for send requirind data`); 
})
//..........................................................................................................................................................
app.get('/abc', function(req, res) {
    console.log(Buffer.from(req.cookies.usernm,'base64').toString());
    console.log(req.cookies.age);
    res.sendStatus('200'); // appear as OK in page
});
//..........................................................................................................................................................
//this is the entry file .. client enter an student endpoint -> app.js -> routes to tudent router -> student controller  -> student model that deal with db -> 
//send data to controller to view it to client 

