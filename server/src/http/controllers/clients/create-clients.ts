import { makeCreateClient } from '@/use-cases/factories/make-create-client'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function createClients(request: FastifyRequest, reply: FastifyReply) {
  const createClientsSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string()
  });

  const parsed = createClientsSchema.safeParse(request.body);

  if (!parsed.success) {
    reply.status(500).send({ message: parsed.error.message });
    return;
  }

  const { name, email, phone } = parsed.data;

  const createClient = makeCreateClient();

  await createClient.execute({ name, email, phone });

  reply.status(201).send({ message: 'client created' });
}