import { FastifyInstance } from 'fastify'
import { listClients } from './list-clients'
import { createClients } from './create-clients';
import { fetchRoutes } from './fetch-routes';

export async function clientsRoutes(app: FastifyInstance) {
  app.get('/', listClients);

  app.post('/', createClients)

  app.get('/routes', fetchRoutes);
}