import { Router } from "express";
const router = Router();
import { getMyDetailsController } from "../controller/myDetailsController.js";

router.get("/thejaashwin/me", getMyDetailsController);

export default router;
