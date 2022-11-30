// event module
// فيه حاجة حصلت في التطبيق واحن بنرد عليها 
const EventEmitter = require('events')
// EventEmitter is a class 

//make instantance
let myEventObj = new EventEmitter();



//reister on lookup event
myEventObj.once('lookup',()=>{
    console.log('lookup event fired #1');
}); // will be fired only once
myEventObj.on('lookup',()=>{
    console.log('lookup event fired #2');
}); 
let fun = ()=>{console.log('lookup event fired #3');}
myEventObj.on('lookup',fun);// turned off at third firing



//firing lookup event twice
myEventObj.emit('lookup');
console.log('------------------------------------');
myEventObj.emit('lookup');
console.log('------------------------------------');

setTimeout(()=>{
    myEventObj.off('lookup',fun)
    myEventObj.emit('lookup')
},1000)