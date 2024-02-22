const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");

const userController = require("../controllers/users.js");





router.route("/signup")
//----------signup get router -------------------------------
.get(userController.renderSignupForm)
//---------Signup router post ------------------------------------------
.post(wrapAsync(userController.signup));







router.route("/login")
//----------Login get router -------------------------------
.get(userController.renderLoginForm)
//----------Login post router -------------------------------
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login", failureFlash:true,}),

userController.login
);







//-------Logout ---------------------------------

router.get("/logout", userController.logout);

module.exports=router;