const { Composer, InlineKeyboard } = require("grammy");

const composer = new Composer();
const keyboard = new InlineKeyboard();

composer.command("start", async (ctx) => {
  ctx.reply(
    `Hello <b>${ctx.from.first_name}</b>\n` + "I crawl http.cat and send cats",
    {
      parse_mode: "HTML",
      reply_markup: keyboard.switchInlineCurrent("Search cat"),
    }
  );
});

module.exports = composer;
