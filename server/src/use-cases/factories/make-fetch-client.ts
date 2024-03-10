import { DatabaseClientRepository } from '@/repositories/database/database-client-repository'
import { FetchClientsUseCase } from '@/use-cases/fetch-clients'

export const makeFetchClients = () => {
  const fetchClientRepository = new DatabaseClientRepository();
  const useCase = new FetchClientsUseCase(fetchClientRepository);

  return useCase;
}