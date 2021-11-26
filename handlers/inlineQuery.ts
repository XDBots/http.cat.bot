import { Composer } from "https://deno.land/x/grammy@v1.3.3/mod.ts";
import validCats from "../valid_cats.ts";

const composer = new Composer();

export default composer;

composer.inlineQuery(/^\d+$/, async (ctx) => {
  const query = ctx.inlineQuery.query;

  if (!validCats.filter((d) => d.toString().startsWith(query)).length) {
    return await ctx.answerInlineQuery([]);
  }

  await ctx.answerInlineQuery(
    validCats
      .filter((d) => d.toString().startsWith(query.trim()))
      .map((code) => ({
        type: "photo",
        id: "cat_" + code,
        photo_url: `https://http.cat/${code}.jpg`,
        thumb_url: `https://http.cat/${code}.jpg`,
        caption: `HTTP Status Code - ${code}`,
      })),
    { cache_time: 30 * 24 * 3600 },
  );
});
