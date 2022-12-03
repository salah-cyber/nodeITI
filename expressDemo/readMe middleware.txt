built in middleware ->  
                    express.json - > parse the body of requests with a JSON payload 
                    express.urlencoded -> parse the body of requests with a urlencoded payload    
                    express.static -> serve static files
route handler -> app.get  all post delete .....
custom/application level middleware -> implements cross cutting concerns like logging, athentication, authorization
third party -> expressjs.com/en/resources/middleware.html / affect app performance 
parameters middleware -> app.param

template engine -> enable use if static template with placeholder which
                    are replace with acttual vales in run time    pug   mutache   EJSS

 not necessar to use template engine in server side 
 use react angular engine for views as single app app