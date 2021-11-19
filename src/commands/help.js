const { Composer, InlineKeyboard } = require("grammy");

const composer = new Composer();
const keyboard = new InlineKeyboard();

composer.command("help", async (ctx) => {
  ctx.reply(
    `<b>Available Commands</b>\n\n` +
      "<code>/cat status-code</code>\n" +
      "<i>e.g:</i> /cat 401",
    "Aliases - /http, /httpcat, /status)",
    {
      parse_mode: "HTML",
      reply_markup: keyboard.switchInlineCurrent("Search cat"),
    }
  );
});

module.exports = composer;
