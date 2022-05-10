import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/photo.js";
import { User } from "./entity/user.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ns-v31-docker",
    port: 5432,
    username: "dev",
    password: "dev",
    database: "dev",
    synchronize: true,
    logging: false,
    entities: [User, Photo],
    migrations: [],
    subscribers: [],
});
