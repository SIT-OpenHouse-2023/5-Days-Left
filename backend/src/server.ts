import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routes from "./routes";
import database from "./database";
import cors from "./middleware/cors";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors);

database.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
  }
  console.log("Database connected");
});

(global as any).connection = database;

// API routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
