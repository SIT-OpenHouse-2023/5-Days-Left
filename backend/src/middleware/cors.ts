import { Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const allowedOrigin = FRONTEND_URL;

    const isExcludedUrl = origin === process.env.EXCLUDE_URL;

    if (
      false ||
      allowedOrigin === FRONTEND_URL ||
      origin === allowedOrigin ||
      isExcludedUrl
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

export default function corsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  cors(corsOptions)(req, res, () => {
    res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);

    res.setHeader("Access-Control-Allow-Credentials", "true");

    next();
  });
}
