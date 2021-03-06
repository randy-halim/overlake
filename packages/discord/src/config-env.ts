import dotenv from "dotenv";
// import tsconfig from "tsconfig-paths";
// import config from "../tsconfig.json";

process.env.NODE_ENV?.toLowerCase() === "dev" &&
  console.log("In development mode, loading .env ..."),
  dotenv.config();

const { SERVER_ID } = process.env;
if (!SERVER_ID || SERVER_ID === "REPLACE_IN_PRODUCTION")
  console.error("No server ID was provided; did you set SERVER_ID in env?"),
    process.exit(1);

const { COMMAND_PREFIX } = process.env;
if (!COMMAND_PREFIX) {
  console.warn(
    "Unable to find a custom command prefix (did you set COMMAND_PREFIX in env?)"
  );
  process.exit(1);
}
export { COMMAND_PREFIX, SERVER_ID };

// process.env.NODE_ENV?.toLowerCase() === "production" &&
//   tsconfig.register({
//     baseUrl: "./",
//     paths: config.compilerOptions.paths,
//   });
