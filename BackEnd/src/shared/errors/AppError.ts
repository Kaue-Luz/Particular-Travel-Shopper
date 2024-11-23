interface CustomError {
  code: number
  message: string
  type: string
}

export class AppError extends Error implements CustomError {
  code: number
  type: string

  constructor({ code, message, type }: CustomError) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.type = type
  }
}
