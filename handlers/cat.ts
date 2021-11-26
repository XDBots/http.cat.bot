import { Composer } from "https://deno.land/x/grammy/mod.ts";
import { commandExtractor } from "../utils.ts";
import validCats from "../valid_cats.ts";

const composer = new Composer();

export default composer;

composer.command(["http", "cat", "httpcat", "status"], async (ctx) => {
  const { args } = commandExtractor(ctx.message!.text);
  if (!args || !validCats.includes(parseInt(args, 10))) {
    return await ctx.reply("Cat not found");
  }

  await ctx.replyWithPhoto(`https://http.cat/${args}.jpg`, {
    caption: `Http Status Code - ${args}`,
  });
});
