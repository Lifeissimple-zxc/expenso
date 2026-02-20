import dotenv from "dotenv"
import { Telegraf } from "telegraf"
import { env } from "~/config/env.ts"

dotenv.config()

console.log(process.env)

const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN)

bot.start((ctx) => {
	ctx.reply("Cheers, send me a pic of your expense and i will try to parse it")
})

bot
	.launch()
	.then(() => console.log("Bot is polling..."))
	.catch((err) => console.error("Launch failed:", err))

bot
	.launch()
	.then(() => console.log("Bot is polling..."))
	.catch((err) => console.error("Launch failed:", err))
