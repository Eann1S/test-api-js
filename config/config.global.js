const config = {};
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

// APP SETTINGS
config.port = 2114;
config.prefix = "v1";
config.url = "http://localhost:2114";

// ENV
config.env = {};
config.env.dev = process.env.NODE_ENV === "dev";
config.env.production = process.env.NODE_ENV === "production";
config.env.test = process.env.NODE_ENV === "test";

// DB SETTINGS
config.dbs = {};
config.dbs.sample_db = {};
config.dbs.sample_db.uri = process.env.MONGO_URI;
config.dbs.sample_db.id = "sample_db";
config.dbs.sample_db.user = process.env.MONGO_USER;
config.dbs.sample_db.password = process.env.MONGO_PASSWORD;
config.dbs.sample_db.db_name = process.env.MONGO_DB;

// LOG SETTINGS
config.log = {};
config.log.errorlog = path.resolve("log/errors.log");
config.log.combined = path.resolve("log/combined.log");

config.log.console = config.env.dev || config.env.test;
config.log.debug = config.env.dev || config.env.test;

// CORS SETTINGS
config.cors = {};
config.cors.credentials = true;
config.cors.origin = true;
config.cors.methods = [
  "GET",
  "PUT",
  "POST",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
];
config.cors.allowedHeaders = ["Content-Type", "Authorization"];
config.cors.exposedHeaders = ["X-Total-Count", "Content-Type", "Authorization"];

// JWT SERVICE SETTINGS
console.log('\n', process.env.MONGO_PASSWORD, '\n');

config.jwt = {};
config.jwt.secretKey = process.env.JWT_SECRET;
config.jwt.sign = {};
config.jwt.sign.issuer = "Test API js backend";
config.jwt.sign.audience = "";
config.jwt.verify = {};
config.jwt.verify.maxAge = process.env.JWT_MAX_AGE;

// UPLOAD IMAGE SETTINGS
config.images = {};
config.images.uploadsDir = "./uploads";
config.images.imagesDir = "public/images/";
config.images.thumbSize = 160;

module.exports = config;
