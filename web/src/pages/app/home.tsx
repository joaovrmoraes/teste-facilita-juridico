import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/api/get-clients";
import { formatPhoneNumber } from "@/utils/formatter";
import { useForm, Controller } from "react-hook-form";

export function Home() {
  const { control, watch } = useForm();

  const search = watch("search");

  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients", search],
    queryFn: () => getClients({
      search,
    }),
  });

  return (
    <>
      <Header />

      <div className="flex h-full w-full flex-col gap-8 p-4">
        <form className="flex max-w-sm gap-2">
          <Controller
            control={control}
            name="search"
            defaultValue={""}
            render={({ field }) => <Input {...field} placeholder="Buscar cliente" />}
          />
        </form>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-start font-semibold">Nome</th>
              <th className="text-start font-semibold">E-mail</th>
              <th className="text-start font-semibold">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ? 
              (<div>Carregando...</div>)
              :
              clients &&
              clients.map((client) => (
                <tr key={client.email} className="border-b">
                  <td className="p-4">{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone && formatPhoneNumber(client.phone)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
