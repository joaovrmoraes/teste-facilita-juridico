import { api } from '@/libs/axios'
import { Client } from '@/dto/client'

export async function postNewClient(client: Client): Promise<void> {
  await api.post('/clients', client)
}