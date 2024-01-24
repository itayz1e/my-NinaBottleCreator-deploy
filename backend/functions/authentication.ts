import * as express from "express";

export function checkPayload(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { imageSearch, page = 1 } = req.body;
  if (!imageSearch) {
    return res.status(400).json({ error: "Image search query not provided." });
  }
  if (page < 1) {
    return res.status(400).json({ error: "Invalid page number." });
  }
  next();
}

