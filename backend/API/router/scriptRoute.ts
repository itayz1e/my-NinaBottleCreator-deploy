import * as express from "express";
import { getImages } from "../control/scriptControl";
import { checkPayload } from "../../functions/authentication"; 

const router = express.Router();

router.post("/get-images", checkPayload, getImages);

export default router;