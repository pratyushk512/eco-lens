import { Report } from "../models/report.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import detectImagewithGoogleCloudVision from "../utils/detectImageWithCloudVision.js";
import { calculateSustainabilityScore } from "../utils/sustainabilityScore.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
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
        throw new ApiError(400,"Image file is required")
    }

    const response=await detectImagewithGoogleCloudVision(image)
    const score= calculateSustainabilityScore(response)
    const newReportData = {
        userId: user._id,
        image: image.url,
        materialsImpact: [response],
        sustainabilityScore: score,
        recommendations: ['Use more renewable materials', 'Reduce water usage']
      };
  
      const report = new Report(newReportData);
      const savedReport = await report.save();


      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `Generate a report based on the following data from the product scanned and parsed through Google Cloud Vision ${savedReport}. Provide alternative recommendations as well. Dont give much of extra knowledge. The report should have a format.Provide a markdown file`

      const result = await model.generateContent(prompt);
      const data=result.response.text()
      return res
      .status(200)
      .json(new ApiResponse(200,{data},"Report generated successfully"))
    } 
)
export {getReportsByUser,scanNewProduct}