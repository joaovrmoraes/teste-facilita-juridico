import { Search } from "lucide-react";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/api/get-clients";

export function Home() {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients({}),
  });

  console.log(clients);

  return (
    <>
      <Header />

      <div className="flex h-full w-full flex-col gap-8 p-4">
        <div className="flex max-w-sm gap-2">
          <Input />
          <Button>
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start font-semibold">Nome</th>
              <th className="text-start font-semibold">E-mail</th>
              <th className="text-start font-semibold">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client) => (
                <tr key={client.email}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
