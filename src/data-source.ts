import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ns-v31-docker",
    port: 5432,
    username: "dev",
    password: "dev",
    database: "dev",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
