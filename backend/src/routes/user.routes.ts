import { Router } from "express";
import userController from "../controller/user.controller";

class UserRoutes {
    router = Router();
    controller = new userController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post("/create", this.controller.createUser);
        this.router.get("/retrieve/all", this.controller.retrieveAllUsers);
        this.router.get("/retrieve/:id", this.controller.retrieveUserById);
        this.router.put("/update/:id", this.controller.updateUser);
        this.router.delete("/delete/all", this.controller.deleteAllUsers);
        this.router.delete("/delete/:id", this.controller.deleteUser);
    }
}

export default new UserRoutes().router;
