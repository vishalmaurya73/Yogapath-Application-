const express=require("express");
const router=express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");

const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {valiateReview,isLoggedIn,isReviewAuthor,}=require("../middleware.js");

const reviewController = require("../controllers/reviews.js");









//---------------- Reviews---------------- Post Route-------------------------------------------

router.post("/", valiateReview, wrapAsync(reviewController.createReview));
   
   //---------------- Reviews---------------- Delete Route-------------------------------------------
   
   router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

   


   module.exports=router;
   