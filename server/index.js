 const express = require('express'); //require express
 var cors = require("cors");
 const mongoose = require('mongoose');
 const cookieSession = require('cookie-session');
 const passport = require('passport');
 const bodyParser = require('body-parser');
 const keys = require('./config/keys');
 require('./models/User'); //User schema
 require('./models/Survey'); //Survey schema
 require('./services/passport'); //services
 const authRoutes = require('./routes/authRoutes'); //authroutes
 const billingRoutes = require('./routes/billingRoutes'); //billingroute
 
 mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })

 const app = express();
 app.use(cors());
 app.use(bodyParser.json());
 
 //configuring cookie session
 app.use(
   cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: [keys.cookieKey]
    })
  );
    
  app.use(passport.initialize());
  app.use(passport.session());
  authRoutes(app); //routes
  billingRoutes(app); //routes

  
  //Seeting front end file path for heroku with routes.
  if(process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    app.use(express.static('client/build'));

    //Express will serve index.html if no route matches
    const path = require('path');
    app.get('*',(req, res) => {
      res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
  }
    
 const PORT = process.env.PORT || 5000;
 app.listen(PORT) 