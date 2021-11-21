const { Composer } = require("grammy");
const { commandExtractor } = require("../utils");
const validcats = require("../validcats");

const composer = new Composer();

composer.command(["http", "cat", "httpcat", "status"], async (ctx) => {
  const { args } = commandExtractor(ctx.message.text);
  if (!args || !validcats.includes(parseInt(args, 10))) {
    return await ctx.reply("Cat not found");
  }

  await ctx.replyWithPhoto(`https://http.cat/${args}.jpg`, {
    caption: `Http Status Code - ${args}`,
  });
});

module.exports = composer;
