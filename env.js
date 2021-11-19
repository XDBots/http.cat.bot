require("dotenv").config({});
const { cleanEnv, str } = require("envalid");

module.exports.ENV = cleanEnv(process.env, {
  BOT_TOKEN: str(),
});
