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



 mongoDB  json-like document based Nosql, use js as a query language

https://cloud.mongodb.com/v2/638cc8366fcf0a0a0cc42077#clusters




git remote add origin repoURL


authentication (logging)  -> then authorization (permissions)
endpoint for registtation -< endpoint for login


قعدت يوم كامل علشان احل خطأ 
وهو اني عامل لو بيترجع نكست وبرة ال لو فيه نكست تانية
وبالتالي بقى عندي اتنين من res.send()
ينغني برجع ردين في نفس الوقت للعميل 