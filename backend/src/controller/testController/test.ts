import express, { Response, Router } from "express";

const router: Router = express.Router();

router.get("test", async (req: any, res: Response) => {
  res.status(200).send("Hello World");
});

export = router;
