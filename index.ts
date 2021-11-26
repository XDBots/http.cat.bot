import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.3.3/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

import handlers from "./handlers/mod.ts";
import env from "./env.ts";

const bot = new Bot(env.BOT_TOKEN);
const app = new Application();

const router = new Router();

bot.use(handlers);

router.post(`/${bot.token}`, webhookCallback(bot, "oak"));

router.get("/", async (ctx) => {
  await bot.api.setWebhook(ctx.request.url.href);
  ctx.response.status = 200;
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (_err) {
    ctx.response.status = 200;
  }
});

app.listen(":3000");
