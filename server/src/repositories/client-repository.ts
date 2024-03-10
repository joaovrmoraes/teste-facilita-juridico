import { Client } from '@/dto/client'

export interface ClientRepository {
  create(client: Client): Promise<void>;
  list(search?: string, page?: number): Promise<Client[]>;
}