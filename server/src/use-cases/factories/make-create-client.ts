import { DatabaseClientRepository } from '@/repositories/database/database-client-repository'
import { CreateClientUseCase } from '@/use-cases/create-client'

export const makeCreateClient = () => {
  const clientRepository = new DatabaseClientRepository();
  const useCase = new CreateClientUseCase(clientRepository);

  return useCase;
}