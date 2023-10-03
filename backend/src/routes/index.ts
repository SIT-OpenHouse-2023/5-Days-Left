import { Application } from "express";
import testRoutes from "./test.routes";
import userRoutes from "./user.routes";

class Routes {
  constructor(app: Application) {
    app.use("/test", testRoutes);
    app.use("/user", userRoutes);
  }
}

export default Routes;
