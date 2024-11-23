import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { PrismaUserRepository } from '../../../../../repositories/prisma/prisma-user-repository'
import { AuthenticateUseCase } from '../../../../../use-cases/auth/authenticate'
import { passwordRequirements } from '../../../scheme/password'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodyScheme = z.object({
    email: z
      .string({ required_error: 'É necessário fornecer um e-mail.' })
      .email({ message: 'O e-mail fornecido é inválido.' }),
    password: passwordRequirements,
  })

  const { email, password } = authenticateBodyScheme.parse(request.body)

  const repository = new PrismaUserRepository()
  const useCase = new AuthenticateUseCase(repository)
  const user = await useCase.execute({ email, password })

  const token = await reply.jwtSign({
    sign: {
      sub: user.id,
    },
  })
  return reply.status(200).send({
    token,
  })
}
