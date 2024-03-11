import { sql } from '@/database'
import { ClientRepository } from '@/repositories/client-repository'
import { Client } from "@/dto/client"

function permute(arr: any[]): any[][] {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let j = 0; j < rest.length; j++) {
      result.push([arr[i]].concat(rest[j]));
    }
  }
  return result;
}

export class DatabaseClientRepository implements ClientRepository {
  async create({ name, email, phone, coordinates }: Client): Promise<void> {
    const { x, y } = coordinates;
    await sql`INSERT INTO clients (name, email, phone, coordinates) VALUES (${name}, ${email}, ${phone}, POINT(${x}, ${y}))`;
  }

  async list(search?: string, page: number = 1): Promise<Client[]> {
    const perPage = 10;
    const offset = (page - 1) * perPage;

    let rows;

    if (search) {
      rows = await sql`
        SELECT * FROM clients 
        WHERE name 
        LIKE ${`%${search}%`} 
        OR email LIKE ${`%${search}%`} 
        ORDER BY name 
        LIMIT ${perPage} 
        OFFSET ${offset}
      `;
    } else {
      rows = await sql`
        SELECT * FROM clients 
        ORDER BY name 
        LIMIT ${perPage} 
        OFFSET ${offset}
      `;
    }

    return rows.map((row: any) => {
      const coordinates = row.coordinates.slice(1, -1).split(',').map(Number);

      return {
        name: row.name,
        email: row.email,
        phone: row.phone,
        coordinates: { x: coordinates[0], y: coordinates[1] }
      }
    });
  }

  async routeGenerate(): Promise<Client[]> {
    const rows = await sql`SELECT * FROM clients ORDER BY name`;

    const clients = rows.map((row: any) => {
      const coordinates = row.coordinates.slice(1, -1).split(',').map(Number);

      return {
        name: row.name,
        email: row.email,
        phone: row.phone,
        coordinates: { x: coordinates[0], y: coordinates[1] }
      }
    });

    const company = { name: 'Empresa', email: '', phone: '', coordinates: { x: 0, y: 0 } };

    const distance = (a: Client, b: Client) => Math.sqrt(Math.pow(b.coordinates.x - a.coordinates.x, 2) + Math.pow(b.coordinates.y - a.coordinates.y, 2));

    const permutations = permute(clients);

    let bestPath: Client[] = [];
    let bestDistance = Infinity;

    for (let path of permutations) {
      path = [company, ...path, company];
      let totalDistance = 0;
      for (let i = 0; i < path.length - 1; i++) {
        totalDistance += distance(path[i], path[i + 1]);
      }
      if (totalDistance < bestDistance) {
        bestDistance = totalDistance;
        bestPath = path;
      }
    }

    return bestPath;
  }

}