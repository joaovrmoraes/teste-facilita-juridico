import { Client } from '@/dto/client'
import { api } from '@/libs/axios'

export async function getRoutes(): Promise<Client[]> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Adiciona um delay de 2 segundos

  const { data } = await api.get('/clients/routes')

  return data
}