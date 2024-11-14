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

export {getReportsByUser}