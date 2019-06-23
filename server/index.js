 const app = require('express')(); //require express
 require('./services/passport'); //services
 require('./routes/authRoutes')(app); //authroutes




 const PORT = process.env.PORT || 5000;
 app.listen(PORT) 