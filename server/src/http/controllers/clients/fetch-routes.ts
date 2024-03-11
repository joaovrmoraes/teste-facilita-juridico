import { makeFetchRoutes } from '@/use-cases/factories/make-fetch-route'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function fetchRoutes(request: FastifyRequest, reply: FastifyReply) {
  const fetchRoutes = makeFetchRoutes();

  const { clients } = await fetchRoutes.execute();

  reply.send(clients);
}