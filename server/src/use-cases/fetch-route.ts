import { ClientRepository } from '@/repositories/client-repository'
import { Client } from '@/dto/client'

interface FetchClientUseCaseResponse {
  clients: Client[];
}

export class FetchRoutesUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute(): Promise<FetchClientUseCaseResponse> {
    const clients = await this.clientRepository.routeGenerate();

    return { clients };
  }
}