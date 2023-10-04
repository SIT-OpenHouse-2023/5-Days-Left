import connection from "../database";
import User from "../model/user.model";

interface IUserSearchParams {
    id?: number;
    name_prefix?: string;
    name?: string;
    surname?: string;
    school?: string;
    province?: string;
    allergy?: string;
}

interface IUserUpdateParams {
    id?: number;
    name_prefix?: string;
    name?: string;
    surname?: string;
    school?: string;
    province?: string;
    allergy?: string;
}

interface IUserService {
    createUser(user: User): Promise<User>;
    retrieve(searchParams: IUserSearchParams): Promise<User[]>;
    retrieveById(userId: number): Promise<User | undefined>;
    updateUser(user: User): Promise<number>;
    deleteUser(userId: number): Promise<number>;
}

class UserService implements IUserService {
    createUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            connection.query(
                "INSERT INTO user (name, surname) VALUES(?, ?)",
                [user.name, user.surname],
                (err: any, res: { insertId: number }) => {
                    if (err) reject(err);
                    else
                        this.retrieveById(res.insertId)
                            .then((user) => resolve(user!))
                            .catch(reject);
                }
            );
        });
    }

    retrieve(searchParams: IUserSearchParams): Promise<User[]> {
        const conditions: string[] = [];
        const values: any[] = [];

        if (searchParams.id !== undefined) {
            conditions.push("id = ?");
            values.push(searchParams.id);
        }

        if (searchParams.name_prefix) {
            conditions.push("LOWER(name_prefix) LIKE ?");
            values.push(`%${searchParams.name_prefix.toLowerCase()}%`);
        }

        if (searchParams.name) {
            conditions.push("LOWER(name) LIKE ?");
            values.push(`%${searchParams.name.toLowerCase()}%`);
        }

        if (searchParams.surname) {
            conditions.push("LOWER(surname) LIKE ?");
            values.push(`%${searchParams.surname.toLowerCase()}%`);
        }

        if (searchParams.school) {
            conditions.push("LOWER(school) LIKE ?");
            values.push(`%${searchParams.school.toLowerCase()}%`);
        }

        if (searchParams.province) {
            conditions.push("LOWER(province) LIKE ?");
            values.push(`%${searchParams.province.toLowerCase()}%`);
        }

        if (searchParams.allergy) {
            conditions.push("LOWER(allergy) LIKE ?");
            values.push(`%${searchParams.allergy.toLowerCase()}%`);
        }

        let query = "SELECT * FROM user";
        if (conditions.length > 0) {
            query += " WHERE " + conditions.join(" AND ");
        }

        return new Promise((resolve, reject) => {
            connection.query(query, values, (err: any, res: any) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveById(userId: number): Promise<User | undefined> {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM user WHERE id = ?",
                [userId],
                (err: any, res: User[]) => {
                    if (err) reject(err);
                    else resolve(res[0]);
                }
            );
        });
    }

    updateUser(updateParams: IUserUpdateParams): Promise<number> {
        let query: string = "UPDATE user SET ";
        let columns: string[] = [];

        if (updateParams?.name_prefix) {
            columns.push(`name_prefix = '${updateParams.name_prefix}'`);
        }
        if (updateParams?.name) {
            columns.push(`name = '${updateParams.name}'`);
        }
        if (updateParams?.surname) {
            columns.push(`surname = '${updateParams.surname}'`);
        }
        if (updateParams?.school) {
            columns.push(`school = '${updateParams.school}'`);
        }
        if (updateParams?.province) {
            columns.push(`province = '${updateParams.province}'`);
        }
        if (updateParams?.allergy) {
            columns.push(`allergy = '${updateParams.allergy}'`);
        }

        if (columns.length === 0) {
            return Promise.resolve(0);
        }

        query += columns.join(", ");
        query += ` WHERE id = ${updateParams.id}`;

        return new Promise((resolve, reject) => {
            connection.query(query, (err: any, res: any) => {
                if (err) reject(err);
                else resolve(res.affectedRows);
            });
        });
    }

    deleteUser(userId?: number): Promise<number> {
        let query: string = "DELETE FROM user";

        if (userId) {
            query += ` WHERE id = ${userId}`;
        }

        return new Promise((resolve, reject) => {
            connection.query(query, (err: any, res: any) => {
                if (err) reject(err);
                else resolve(res.affectedRows);
            });
        });
    }
}

export default new UserService();
