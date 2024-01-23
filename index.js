const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');


require('./models/User');
require('./services/passport');
const User = mongoose.model('users');
try {
    const connection = mongoose.connect(keys.mongoConnectionUrl);
}
catch(err){
    console.log({err})
}


const app = express();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

app.use(function(request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb()
    }
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb()
    }
  }
  next()
})

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
);

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
});
app.get('/api/logout', (req, res) => {
    req.logout(()=>res.redirect("/"));
});

app.listen(5000)