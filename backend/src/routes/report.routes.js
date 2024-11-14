import {Router} from "express"
import { getReportsByUser,scanNewProduct } from "../controllers/report.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import {upload} from "../middlewares"
const router= Router()


//secured routes
router.route("/getPastScans").get(verifyJWT,getReportsByUser)
router.route("/scanNewProduct").post(
    upload.fields([
        {
            name:"images",
            maxCount:2
        }
    ]),verifyJWT,scanNewProduct
)
export default router