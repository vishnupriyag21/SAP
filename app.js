const express= require('express');
const tourRouter = require('./routes/tour.route');
const app=express();


app.use(express.json());
//send req from postman /api/v1/tours  with body ->app.use(express.json()); ->looking for pattern and which request we hit i.e post
app.use("/api/v1/tours",tourRouter);
module.exports=app;
    //200 is json response status code for get which is a response request
//slash means rootone