import { getRoutes } from "@/api/get-routes";
import { formatPhoneNumber } from "@/utils/formatter";
import * as Dialog from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { SkeletonComponent } from "./skeleton";

export function RoutesDialogContent({ open }: { open: boolean }) {
  const { data: routes, isLoading } = useQuery({
    queryKey: ["routes"],
    queryFn: () => getRoutes(),
    enabled: open,
  });

  return (
    <Dialog.Content className=" data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-screen-lg translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
      <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
        Gerar Rota
      </Dialog.Title>
      <table className="max-h-full w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-start font-semibold">Nome</th>
            <th className="text-start font-semibold">E-mail</th>
            <th className="text-start font-semibold">Telefone</th>
            <th className="text-start font-semibold">Coordenadas</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            routes &&
            routes.map((client, index) => (
              <tr key={client.email + index} className="border-b">
                <td className="p-4">{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone && formatPhoneNumber(client.phone)}</td>
                <td>
                  X: {client.coordinates.x} Y: {client.coordinates.y}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isLoading && <SkeletonComponent />}

      <Dialog.Close asChild>
        <button
          className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <X />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  );
}
