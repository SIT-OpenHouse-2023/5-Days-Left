import express, { Application } from "express";
import Server from "./index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const HOST: string = process.env.HOST || "localhost";

app
  .listen(PORT, HOST, function () {
    console.log(`Server is running on ${HOST}:${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
