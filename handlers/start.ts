import {
  Composer,
  InlineKeyboard,
} from "https://deno.land/x/grammy@v1.3.3/mod.ts";

const composer = new Composer();

export default composer;

composer.command("start", async (ctx) => {
  await ctx.reply(
    `Hello <b>${ctx.from!.first_name}</b>\n` + "I crawl http.cat and send cats",
    {
      parse_mode: "HTML",
      reply_markup: new InlineKeyboard().switchInlineCurrent("Search cat"),
    },
  );
});
