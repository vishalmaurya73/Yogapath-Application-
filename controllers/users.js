
const User = require("../models/user");





//----------signup get router -------------------------------

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
}




//---------Signup router post ------------------------------------------

module.exports.signup = async(req,res)=>{

    try{
        let{username,email,password}=req.body;
        const newUser=new User({email, username});
        
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wonderlust!");
        res.redirect("/listings");

        })
        
    } 
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

   
     

};


//----------Login get router -------------------------------

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};




//----------Login post router -------------------------------

module.exports.login = async (req,res)=>{
    req.flash("success" , "Welcom back !to woderlust! You are Loggged in");
    res.redirect("/listings");
    };



    //--------Logout ------------------------------------

    module.exports.logout = (req,res,next)=>{
        req.logout((err)=>{
            if(err){
               return next(err);
            }
            req.flash("success","you are logged out !");
            res.redirect("/listings");
    
        })
    };