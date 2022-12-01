// make module that run in client and server side
//    env           browser                                node
//  global scope    window object                       global object
//  var declared    assigned as prop to window obj      accessible within module scope only
(function (context,modName,definition){ //context ==this,  definition = fun
    //if node   if global obj is preent, module obj, module.exports
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    }
    else{
    //if window  if window object is present 
    context[modName] = definition();
    }
})(this,'shoppingCartCustomModule55',function () {//this refer to global if server and window if browser 
    //contain implementaion of api 
    const api = {
        name: 'shopping cart',
        discription: 'add item to cart',
        items:[], // i add this and additen fun so it is a minor release
        addItem(item,price){  // i need to change vesion in package fron 1.0.0 to 1.1.0 
            this.items.push({ // then  nmp publih
                item_nm:item,
                item_price:price
            })
        }
    }
    //then return the api 
    return api;
}); 

// publish module on npm
// npm adduser
//npm publish