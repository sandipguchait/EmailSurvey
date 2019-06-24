const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//Bringing in the model 
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, 
async (accessToken, refreshToken, profile, done) => {
 const existingUser = await User.findOne({ googleId: profile.id })
  if(existingUser) {
    done(null, existingUser);
  } else {
    const newUser = await new User({ googleId: profile.id }).save();
    done(null,newUser);
  }
}));

passport.serializeUser(( newUser, done ) => {
  done( null, newUser.id );
});

passport.deserializeUser(async (id, done) => {
  const user = User.findById(id); 
  done(null, user);
});
