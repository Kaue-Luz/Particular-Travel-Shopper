import { FastifyInstance } from 'fastify'

import { authenticate } from './routes/authenticate'

export async function authRoutes(app: FastifyInstance) {
  app.post('/authenticate', authenticate)
}
