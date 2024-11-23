export const errorConstants = {
  // Conta e Autenticação
  ACCOUNT_ALREADY_EXISTS: {
    code: 409,
    message:
      'Esta conta já está registrada. Use um email diferente ou faça login.',
    type: 'ACCOUNT_ALREADY_EXISTS',
  },
  INVALID_CREDENTIALS: {
    code: 401,
    message:
      'Credenciais inválidas. Verifique seu usuário e senha. Se esqueceu sua senha, use a opção "Esqueci minha senha" para redefini-la.',
    type: 'INVALID_CREDENTIALS',
  },
  UNAUTHORIZED: {
    type: 'UNAUTHORIZED',
    code: 401,
    message:
      'Você não tem autorização para executar esta ação. Tente novamente.',
  },
  EXPIRED_TOKEN: {
    type: 'EXPIRED_TOKEN',
    code: 401,
    message: 'Seu token expirou. Por favor, obtenha um novo token.',
  },
  EXPIRED_REFRESH_TOKEN: {
    type: 'EXPIRED_REFRESH_TOKEN',
    code: 401,
    message: 'Seu token de atualização expirou. Faça login novamente.',
  },
}
