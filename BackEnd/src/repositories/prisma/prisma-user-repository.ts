import { User, Prisma } from '@prisma/client'

import { prisma } from '../../lib/prisma'
import { UserRepository } from '../user-repository'

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await prisma.user.create({ data })
  }
}
