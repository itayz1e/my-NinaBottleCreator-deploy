import * as express from "express";

export function authorizationMiddleware (req: express.Request, res: express.Response, next: express.NextFunction) {
  const secretFront = req.headers["authorization"];
  if(!secretFront){
   return res.sendStatus(401,);
  }
  const appSecret = process.env.VITE_AUTHORIZATION;
  if(appSecret !== secretFront){
    return res.sendStatus(401);
  }
  next();
}

