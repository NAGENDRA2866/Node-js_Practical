const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/register",(req,res)=>{
    res.render("views/auth/register");
})

router.post('/register',async (req,res)=>{
    // console.log(req.body);
    const {username,password,role,email} = req.body;

    let user = new User({username,email,role});

    await User.register(user,password);

    res.redirect("/login")
})

router.get('/login',(req,res)=>{
    res.render("views/auth/login")
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/reviews',
  failureRedirect: '/login'
}));


router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/reviews');
  });
});

module.exports = router;