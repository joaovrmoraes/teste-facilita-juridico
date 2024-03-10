import { sql } from '@/database'
import { ClientRepository } from '@/repositories/client-repository'
import { Client } from "@/dto/client"

export class DatabaseClientRepository implements ClientRepository {
  async create({ name, email, phone }: Client): Promise<void> {
    await sql`INSERT INTO clients (name, email, phone) VALUES (${name}, ${email}, ${phone})`;
  }

  async list(search?: string, page: number = 1): Promise<Client[]> {
    const perPage = 10;
    const offset = (page - 1) * perPage;

    let rows;

    if (search) {
      rows = await sql`SELECT * FROM clients WHERE name LIKE ${`%${search}%`} LIMIT ${perPage} OFFSET ${offset}`;
    } else {
      rows = await sql`SELECT * FROM clients LIMIT ${perPage} OFFSET ${offset}`;
    }

    return rows.map((row: any) => {
      return {
        name: row.name,
        email: row.email,
        phone: row.phone
      }
    });
  }
}