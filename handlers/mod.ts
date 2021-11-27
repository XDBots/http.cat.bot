import { Composer } from "https://deno.land/x/grammy@v1.4.2/mod.ts";

import start from "./start.ts";
import cat from "./cat.ts";
import inlineQuery from "./inlineQuery.ts";
import help from "./help.ts";

const composer = new Composer();

export default composer;

composer.use(start);
composer.use(cat);
composer.use(inlineQuery);
composer.use(help);
