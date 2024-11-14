import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getReportsByUser= asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id);
    if(!user){
        throw new ApiError(400,"User not found")
    }
    const reports=await Report.find({userId: user._id})
    if(!reports){
        throw new ApiError("No reports found")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,{reports},"List of products scanned fetched successfully"))
})

const scanNewProduct= asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(!user){
        throw new ApiError(400,"User not authorised")
    }
    
    const imageLocalFilePath=req.files?.image[0]?.path;


    if(!imageLocalFilePath){
        throw new ApiError(400,"Image is required")
    }
    console.log(req.files)
    const image= await uploadOnCloudinary(imageLocalFilePath);
    if(!image){
        throw new ApiError(400,"Avatar file is required")
    }

    

})
export {getReportsByUser}