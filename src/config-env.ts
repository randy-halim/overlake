import dotenv from "dotenv";
import tsconfig from "tsconfig-paths";
import config from "../tsconfig.json";

process.env.NODE_ENV?.toLowerCase() === "dev" &&
  console.log("In development mode, loading .env ..."),
  dotenv.config();

process.env.NODE_ENV?.toLowerCase() === "production" &&
  tsconfig.register({
    baseUrl: "./",
    paths: config.compilerOptions.paths,
  });
