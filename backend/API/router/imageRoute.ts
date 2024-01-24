import * as express from "express";
import { seveImage } from "../control/imageControl";



const router = express.Router();

router.post("/seve-selected-images", seveImage);

export default router;