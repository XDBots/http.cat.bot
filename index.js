const express = require("express");
const { webhookCallback } = require("grammy");

const { bot } = require("./src/bot");
const { ENV } = require("./env");
const { start, cat, help } = require("./src/commands");
const { inlineQuery } = require("./src/handlers");

const app = express();
app.use(express.json());

bot.use(start);
bot.use(cat);
bot.use(help);
bot.use(inlineQuery);

app.use(`/${ENV.BOT_TOKEN}`, webhookCallback(bot, "express"));

app.get("/setWebhook", async (req, res) => {
  await bot.api.setWebhook(`https://${req.hostname}/${ENV.BOT_TOKEN}`);
  res.json({ success: true });
});

app.use(async (req, res) => {
  const me = await bot.api.getMe();
  res.redirect(`https://telegram.dog/${me.username}`);
});

module.exports = app;
