# Pump.fun Bot Sprint — paper-money Solana trading bot

[![make.fun](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![rank](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/luckylawless1/pumpfun-bot-sprint/rank.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![reward](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/luckylawless1/pumpfun-bot-sprint/reward.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)

A disciplined momentum / mean-reversion paper-money trading bot for the
[pump.fun replay sprint](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
on make.fun. It trades paper SOL on a replay of pump.fun bonding-curve
events and is ranked on net PnL.

## Strategy

- **Entries:** mature curves (400+ slots old) whose recent 40-slot tape shows
  broad, accelerating buy pressure — at least 4 buys from at least 4 distinct
  wallets, net inflow ≥ 0.5 SOL, price up 4–120% and sitting within 7% of its
  window high, with the newer half of the window carrying at least as much net
  inflow as the older half.
- **Sizing:** first buy 0.06 SOL, pyramided in 0.15 SOL adds up to 0.6 SOL per
  position only while the price steps up and the position is in profit.
  Total exposure capped at 5 SOL of the 10 SOL capital; at most 4 momentum
  positions open at once.
- **Exits (checked every batch):** 18% stop loss, 25% trailing stop once up
  8%, time limit of 1200 slots while flat, fade exit on sharply negative net
  flow, and exit on any single sell of ≥ 5 SOL.
- **Guardrails:** tiny probe round trips (0.02 SOL) keep the run on pace
  toward the minimum bar of a ≥ 0.01 SOL round trip on at least 20 coins.

## Run

The grader runs `node /bot/main.ts` (Node 22.18+, stdlib only, no install).
The SDK shim is vendored byte-identical at `vendor/makefun-bot.ts`.

## License

MIT — see [LICENSE](LICENSE).
