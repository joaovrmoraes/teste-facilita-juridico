import { ClientRepository } from '@/repositories/client-repository'
import { Client } from '@/dto/client'

interface FetchClientsUseCaseRequest {
  name: string;
  email: string;
  phone: string;
}

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute({ name, email, phone }: FetchClientsUseCaseRequest): Promise<void> {
    await this.clientRepository.create({ name, email, phone });
  }
}