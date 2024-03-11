import { DatabaseClientRepository } from '@/repositories/database/database-client-repository'
import { FetchRoutesUseCase } from '@/use-cases/fetch-route'

export const makeFetchRoutes = () => {
  const fetchClientRepository = new DatabaseClientRepository();
  const useCase = new FetchRoutesUseCase(fetchClientRepository);

  return useCase;
}