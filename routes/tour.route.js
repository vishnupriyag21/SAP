//First create a routes folder and in that tour.Route.js

const tourController = require('../controllers/tour.controller');



const tourRouter=require('express').Router();


tourRouter.get("/",tourController.getTours);
tourRouter.post("/",tourController.createTour);
tourRouter.get("/:id",tourController.getTourbyID);
tourRouter.patch("/:id",tourController.updatetourbyId);
tourRouter.delete("/:id",tourController.deletetourbyId);

module.exports=tourRouter;