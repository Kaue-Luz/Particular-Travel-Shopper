import { compare } from 'bcryptjs'

import { UserRepository } from '../../repositories/user-repository'
import { AppError } from '../../shared/errors/AppError'
import { errorConstants } from '../errors/constants'

interface AuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ email, password }: AuthenticateRequest) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError(errorConstants.INVALID_CREDENTIALS)
    }

    const doesPasswordMatches = await compare(password, user!.password_hash)

    if (!doesPasswordMatches) {
      throw new AppError(errorConstants.INVALID_CREDENTIALS)
    }

    return user
  }
}
