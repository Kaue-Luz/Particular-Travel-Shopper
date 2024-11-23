import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = 'senhaSimplesParaTeste'
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await prisma.user.findUnique({
    where: { email: 'usuario@teste.com' },
  })

  if (existingUser) {
    await prisma.user.delete({
      where: { email: 'usuario@teste.com' },
    })
  }

  const user = await prisma.user.create({
    data: {
      name: 'Usuário Teste',
      email: 'usuario@teste.com',
      password_hash: hashedPassword,
    },
  })

  console.log('Usuário criado: ', user)

  const car1 = await prisma.car.create({
    data: {
      model: 'Plymouth Valiant 1973 rosa e enferrujado',
      year: 1973,
    },
  })

  const car2 = await prisma.car.create({
    data: {
      model: 'Dodge Charger R/T 1970 modificado',
      year: 1970,
    },
  })

  const car3 = await prisma.car.create({
    data: {
      model: 'Aston Martin DB5 clássico',
      year: 1960,
    },
  })

  const driver1 = await prisma.driver.create({
    data: {
      name: 'Homer Simpson',
      description:
        'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio.',
      tax: 2.5,
      min_distance: 1,
      car_id: car1.id,
    },
  })

  const driver2 = await prisma.driver.create({
    data: {
      name: 'Dominic Toretto',
      description:
        'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez.',
      tax: 5.0,
      min_distance: 5,
      car_id: car2.id,
    },
  })

  const driver3 = await prisma.driver.create({
    data: {
      name: 'James Bond',
      description:
        'Boa noite, sou James Bond. A seu dispor para um passeio suave e discreto.',
      tax: 10.0,
      min_distance: 1,
      car_id: car3.id,
    },
  })

  await prisma.rating.create({
    data: {
      rating: 2,
      comment:
        'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
      driver_id: driver1.id,
    },
  })

  await prisma.rating.create({
    data: {
      rating: 4,
      comment:
        'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
      driver_id: driver2.id,
    },
  })

  await prisma.rating.create({
    data: {
      rating: 5,
      comment:
        'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
      driver_id: driver3.id,
    },
  })

  console.log('Motoristas, carros e avaliações criados com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
