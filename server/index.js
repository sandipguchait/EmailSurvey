 const app = require('express')(); //require express
 const mongoose = require('mongoose');
 const keys = require('./config/keys');
 require('./services/passport'); //services
 require('./routes/authRoutes')(app); //authroutes


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })


 const PORT = process.env.PORT || 5000;
 app.listen(PORT) 