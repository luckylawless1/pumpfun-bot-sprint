// Pump.fun replay bot: disciplined momentum entries with hard exits.
// The strategy lives in strategy.ts; the SDK shim is vendored at
// vendor/makefun-bot.ts (byte-identical to the kit's sdk/ts/makefun-bot.ts).
// Run by the grader as `node /bot/main.ts` (Node 22.18+, stdlib only).

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
