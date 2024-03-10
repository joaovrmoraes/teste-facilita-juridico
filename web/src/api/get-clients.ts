import { Client } from '@/dto/client'
import { api } from '@/libs/axios'

interface getClientsProps {
  search?: string
  page?: number
}

export async function getClients({ search, page }: getClientsProps): Promise<Client[]> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Adiciona um delay de 2 segundos

  const { data } = await api.get('/clients', {
    params: {
      search,
      page
    }
  })

  return data
}