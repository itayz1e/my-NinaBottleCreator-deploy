import * as express from "express";
import { addForm } from "../control/formControl";

const router = express.Router();

router.post("/create-form", addForm);

export default router;