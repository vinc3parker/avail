import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // use false in production
  logging: true,
  entities: [__dirname + "/../entities/*.ts"],
  migrations: [],
  subscribers: [],
});
