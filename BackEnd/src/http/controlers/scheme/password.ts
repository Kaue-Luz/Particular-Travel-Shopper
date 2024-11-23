import { z } from 'zod'

export const passwordRequirements = z
  .string({
    required_error: 'É necessário fornecer uma senha.',
    invalid_type_error: 'A senha deve ser uma string.',
  })
  .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
  .regex(/[A-Z]/, {
    message: 'A senha deve conter pelo menos uma letra maiúscula.',
  })
  .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número.' })
  .regex(/[^A-Za-z0-9]/, {
    message: 'A senha deve conter pelo menos um caractere especial.',
  })
