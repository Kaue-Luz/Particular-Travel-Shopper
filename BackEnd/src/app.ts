import fastifyJwt from '@fastify/jwt'
import Fastify from 'fastify'
import { ZodError } from 'zod'

import { env } from './env'
import { authRoutes } from './http/controlers/routes/auth/route-auth'
import { AppError } from './shared/errors/AppError'

export const app = Fastify({
  logger: true,
})

app.register(
  async (instance) => {
    instance.register(authRoutes, { prefix: '/auth' })
  },
  { prefix: '/api' },
)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: env.EXPIRATION_TOKEN,
  },
})

// Error Handlers
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: true,
      message: error.errors[0].message,
      type: 'Validation',
    })
  } else if (error instanceof AppError) {
    return reply
      .status(Number(error.code))
      .send({ error: true, message: error.message, type: error.type })
  }

  console[env.NODE_ENV !== 'production' ? 'log' : 'error'](error)
  return reply
    .status(500)
    .send({ message: 'Internal server error. Please try again later.' })
})
