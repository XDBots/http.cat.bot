// @ts-check
const { Bot } = require("grammy");
const { ENV } = require("../env");

module.exports.bot = new Bot(ENV.BOT_TOKEN, {
  client: { canUseWebhookReply: () => true },
});
