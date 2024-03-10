import { ClientRepository } from '@/repositories/client-repository'
import { Client } from '@/dto/client'

interface FetchClientsUseCaseRequest {
  search?: string;
  page?: number;
}

interface FetchClientUseCaseResponse {
  clients: Client[];
}

export class FetchClientsUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute({ search, page }: FetchClientsUseCaseRequest): Promise<FetchClientUseCaseResponse> {
    const clients = await this.clientRepository.list(search, page);
    
    return { clients };
  }
}