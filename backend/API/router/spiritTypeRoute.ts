import * as express from "express";
import { getSpiritType } from "../control/spiritTypeControl";

const router = express.Router();

router.get("/get-tpirit-type", getSpiritType);

export default router;