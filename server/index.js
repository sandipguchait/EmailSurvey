 const express = require('express'); //require express
 var cors = require("cors");
 const mongoose = require('mongoose');
 const cookieSession = require('cookie-session');
 const passport = require('passport');
 const keys = require('./config/keys');
 require('./models/User');
 require('./services/passport'); //services
 const authRoutes = require('./routes/authRoutes'); //authroutes
 
 mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })

 const app = express();
 //configuring cookie session
 app.use(
   cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: [keys.cookieKey]
    })
  );
    
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors());
  authRoutes(app); //routes
    
 const PORT = process.env.PORT || 5000;
 app.listen(PORT) 