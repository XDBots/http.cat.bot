// @ts-check
const { Composer } = require("grammy");
const validcats = require("../validcats");

const composer = new Composer();

composer.inlineQuery(/^\d+$/, async (ctx) => {
  const query = ctx.inlineQuery.query;

  if (!validcats.filter((d) => d.toString().startsWith(query)).length) {
    return await ctx.answerInlineQuery([]);
  }

  await ctx.answerInlineQuery(
    validcats
      .filter((d) => d.toString().startsWith(query.trim()))
      .map((code) => ({
        type: "photo",
        id: "cat_" + code,
        photo_url: `https://http.cat/${code}.jpg`,
        thumb_url: `https://http.cat/${code}.jpg`,
        caption: `HTTP Status Code - ${code}`,
      })),
    { cache_time: 30 * 24 * 3600 }
  );
});

module.exports = composer;
