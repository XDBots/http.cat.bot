import {
  Composer,
  InlineKeyboard,
} from "https://deno.land/x/grammy@v1.4.2/mod.ts";

const composer = new Composer();

export default composer;

composer.command("help", async (ctx) => {
  await ctx.reply(
    `<b>Available Commands</b>\n\n` +
      "<code>/cat status-code</code>\n" +
      "<i>e.g:</i> /cat 401\n" +
      "Aliases - /http, /httpcat, /status)",
    {
      parse_mode: "HTML",
      reply_markup: new InlineKeyboard().switchInlineCurrent("Search cat"),
    },
  );
});
