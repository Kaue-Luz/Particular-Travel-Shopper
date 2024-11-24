import { Ride } from '@prisma/client'

interface Address {
  lat: string
  long: string
}

export interface RideRepository {
  findRideByLocation({
    firstAddress,
    secondAddress,
  }: {
    firstAddress: Address
    secondAddress: Address
  }): Promise<Ride | null>
}
