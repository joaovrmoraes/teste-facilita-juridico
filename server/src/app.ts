import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { initializeDatabase } from './database';
import { clientsRoutes } from '@/http/controllers/clients/routes';

initializeDatabase().catch(console.error);

export const app = fastify()

app.register(fastifyCors, {
  origin: true, // Permitir todas as origens
})

app.register(clientsRoutes, { prefix: '/clients' })