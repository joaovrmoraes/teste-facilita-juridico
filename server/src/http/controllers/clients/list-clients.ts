import { makeFetchClients } from '@/use-cases/factories/make-fetch-client'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function listClients(request: FastifyRequest, reply: FastifyReply) {
  const listClientsSchema = z.object({
    search: z.string().optional(),
    page: z.coerce.number().optional()
  });

  const { search, page } = listClientsSchema.parse(request.query);

  const fetchClients = makeFetchClients();

  const { clients } = await fetchClients.execute({ search, page });

  reply.send(clients);
}