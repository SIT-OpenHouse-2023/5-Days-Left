import express, { Router } from "express";
import testController from "../controller/testController/test";

const router: Router = express.Router();

router.use("/", testController);

export = router;
