const { model } = require("mongoose");

const mongoose =require('mongoose');
//Schema for our table/model
const tourSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please enter the name']
         // this is for like this name attribute is required i.e has to be entered or else directly 
         //write name:String
    },
    price:{
        type: Number,
        required: [true,'Please enter the price']
    },
    desc:String,
    plan:{// for ex the plan is gold,silver,diamond so the use has to enter smthng in thse three 
        // so for that enum thing is added 
        type:String,
        required: [true,'Please enter the plan'],
        enum:{
            values: ['silver','gold','diamond'],
            message: 'You have to enter gold silver or diamond others not accepted'
        }
    }
});

const tourModel=mongoose.model('tour',tourSchema);
module.exports=tourModel;