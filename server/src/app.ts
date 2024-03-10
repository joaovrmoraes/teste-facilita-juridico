import fastify from 'fastify'
import { initializeDatabase } from './database';
import { clientsRoutes } from '@/http/controllers/clients/routes';

initializeDatabase().catch(console.error);

export const app = fastify()

app.register(clientsRoutes, { prefix: '/clients' })