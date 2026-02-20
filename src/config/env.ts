import z from "zod"
import "dotenv/config"

const envSchema = z.object({
	TELEGRAM_BOT_TOKEN: z.string().min(10),
})

export const env = envSchema.parse(process.env)

export type ENV = typeof env
