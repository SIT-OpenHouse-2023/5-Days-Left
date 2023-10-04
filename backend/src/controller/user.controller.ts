import { Request, Response } from "express";
import User from "../model/user.model";
import UserService from "../services/user.service";

export default class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user: string[] = req.body.name.split(" ");
            const newUser: User = {
                name: user[0],
                surname: user[1],
            };
            const checkUser: User[] | undefined = await UserService.retrieve(
                newUser
            );
            if (checkUser[0]) {
                res.status(409).json({ error: "User already exists" });
                return;
            }
            const savedUser: User = await UserService.createUser(newUser);
            res.status(201).json(savedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async retrieveAllUsers(req: Request, res: Response) {
        try {
            const searchParams: User = {
                id: req.query.id as number | undefined,
                name_prefix: req.query.name_prefix as string | undefined,
                name: req.query.name as string | undefined,
                surname: req.query.surname as string | undefined,
                school: req.query.school as string | undefined,
                province: req.query.province as string | undefined,
                allergy: req.query.allergy as string | undefined,
            };
            const users: User[] = await UserService.retrieve(searchParams);
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async retrieveUserById(req: Request, res: Response) {
        try {
            const userId: number = parseInt(req.params.id);
            const user: User | undefined = await UserService.retrieveById(
                userId
            );
            if (!user) res.status(404).json({ error: "User not found" });
            else res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId: number = parseInt(req.params.id);
            const user: User | undefined = await UserService.retrieveById(
                userId
            );
            if (!user) res.status(404).json({ error: "User not found" });
            else {
                const updatedUser: User = {
                    id: userId,
                    name_prefix: req.body.name_prefix,
                    name: req.body.name,
                    surname: req.body.surname,
                    school: req.body.school,
                    province: req.body.province,
                    allergy: req.body.allergy,
                };
                await UserService.updateUser(updatedUser);
                res.status(200).json(updatedUser);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId: number = parseInt(req.params.id);
            const user: User | undefined = await UserService.retrieveById(
                userId
            );
            if (!user) res.status(404).json({ error: "User not found" });
            else {
                await UserService.deleteUser(userId);
                res.status(200).json({ msg: "User deleted" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async deleteAllUsers(req: Request, res: Response) {
        try {
            await UserService.deleteUser();
            res.status(200).json({ msg: "All users deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
