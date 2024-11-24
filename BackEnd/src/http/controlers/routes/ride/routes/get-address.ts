import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getAddress(request: FastifyRequest, reply: FastifyReply) {
  const address = z.object({
    address: z.string({ required_error: 'É necessario fornecer um endereço' }),
  })
}
