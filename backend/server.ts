import { authorizationMiddleware } from "./API/middleware/scriptMiddleware";
import formRoute from "./API/router/formRoute";
import imageRoute from "./API/router/imageRoute";
import scriptRoute from "./API/router/scriptRoute";
import express from 'express'
import spiritTypeRoute from "./API/router/spiritTypeRoute";
import loginRoute from "./API/router/loginRoute";
import cookieParser from 'cookie-parser';
import cors from "cors";

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

app.get('/', function (req: any, res: any) {
  res.send('Hello World')
})


app.use(authorizationMiddleware)
app.use('/api/script', scriptRoute)
app.use('/api/form', formRoute)
app.use('/api/spirit', spiritTypeRoute);
app.use('/api/image', imageRoute)
app.use('/api/login', loginRoute)

app.listen(port, () => {
  console.log(`runnig on ${port}`)
})

//server