import { ClientRepository } from '@/repositories/client-repository'

interface FetchClientsUseCaseRequest {
  name: string;
  email: string;
  phone: string;
  coordinates: { x: number; y: number };
}

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute({ name, email, phone, coordinates }: FetchClientsUseCaseRequest): Promise<void> {
    await this.clientRepository.create({ name, email, phone, coordinates });
  }
}