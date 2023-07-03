const tourModel = require("../models/tour.model");

let tours= []

exports.getTours = async(req,res)=>{
    try {
        const tours=await tourModel.find({});
        return res.status(200).json({
        data: tours,
    });
    } catch (error) {
        return res.status(500).json({
            'message':'Smthng wrong'
    });
    }
    
}
exports.createTour = async(req,res)=>{
    try {
        const reqBody=req.body;
        const result=await tourModel.create(reqBody);
        return res.status(201).json({
        data: result
    });
    } catch (error) {
    return res.status(500).json({
            message:error.message
        })
    }
    
}
exports.getTourbyID =async (req,res)=>{
    try {
        const tourId=req.params.id;
        const tour=await tourModel.findById(tourId);
        if(!tour){
        return res.status(404).json({
            message:`Tour with this ID not found: ${tourId}`
        });
    }
    return res.status(200).json({
        data:tour
    });
    }

     catch (error) {
        return res.status(500).json({
            message:error.message
    });
    }
}

exports.updatetourbyId = async(req,res)=>{
    try {
        const tourId=req.params.id;
        const reqBody=req.body;
        const result= await tourModel.findByIdAndUpdate(tourId,reqBody,{
            new:true,
            runValidators:true
        });
        return res.status(200).json({
        data:result
    });
    } catch (error) {
        return res.status(500).json({
            data:error.message
    });
    }
    
   
}
exports.deletetourbyId = async (req, res) => {

    try {

        const tourId = (req.params.id);

        const tour = await tourModel.findById(tourId)

        if (!tour) {

            return res.status(404).json({

                message: `Tour with this id is not found : ${tourId}`

            })

        }

        const result = await tourModel.findByIdAndDelete(tourId)

        return res.status(200).json({

            data:result

        })

    } catch (error) {

        return res.status(500).json({

            data:error.message

        })

    }

}

