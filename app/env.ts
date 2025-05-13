import z from "zod"

const publicEnvSchema = z.object({
  VITE_APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
  VITE_APP_API_URL: z.string().url(),
  VITE_APP_API_MOCK_MODE: z.coerce.boolean(),
})

export const clientEnv = publicEnvSchema.parse(import.meta.env)
