// import express, { Express } from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "./middleware/cors";
// import routes from "./routes";

// dotenv.config();
// const app: Express = express();
// const port = process.env.PORT || 4000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors);

// // API routes
// app.use("/", routes);

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
import express, { Application } from "express";
import cors from "cors";
import corsConfig from "./cors/corsConfig";
import Routes from "./routes";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    app.use(cors(corsConfig()));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
