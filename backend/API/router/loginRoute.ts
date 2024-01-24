import * as express from "express";
import { login } from "../control/loginControl";

const router = express.Router();

router
.post('/authorization-password', login);

export default router;