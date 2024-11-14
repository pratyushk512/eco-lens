import {Router} from "express"
import { getReportsByUser } from "../controllers/report.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
const router= Router()


//secured routes
router.route("/getPastScans").post(verifyJWT,getReportsByUser)

export default router