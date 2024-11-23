import { config } from 'dotenv'
import { z } from 'zod'

config()

const envSchema = z.object({
  NODE_ENV: z
    .enum(['test', 'production', 'development'])
    .default('development'),
  PORT: z.coerce.number().default(8080),
  SEEDPASSWORD: z.coerce.string().default('Senha123#'),
  SEEDEMAIL: z.coerce.string().default('teste@teste.com'),
  EXPIRATION_TOKEN: z.string(),
  JWT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
