import { Client } from '@/dto/client'
import { api } from '@/libs/axios'

interface getClientsProps {
  search?: string
  page?: number
}

export async function getClients({ search, page }: getClientsProps): Promise<Client[]> {
  const { data } = await api.get('/clients', {
    params: {
      search,
      page
    }
  })


  return data
}