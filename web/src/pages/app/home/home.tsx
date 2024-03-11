import { Header } from "../../../components/header";
import { Input } from "../../../components/input";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/api/get-clients";
import { formatPhoneNumber } from "@/utils/formatter";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/button";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { RoutesDialogContent } from "@/components/routes-dialog-contet";
import { SkeletonComponent } from "@/components/skeleton";

export function Home() {
  const { control, watch } = useForm();
  const [open, setOpen] = useState(false);

  const search = watch("search");

  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients", search],
    queryFn: () =>
      getClients({
        search,
      }),
  });

  return (
    <>
      <Header />

      <div className="flex h-full w-full flex-col gap-8 p-4">
        <div className="flex w-full justify-between">
          <form className="flex w-96">
            <Controller
              control={control}
              name="search"
              defaultValue={""}
              render={({ field }) => (
                <Input {...field} placeholder="Buscar cliente" />
              )}
            />
          </form>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button type="button">Gerar Rota</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
              <RoutesDialogContent open={open} />
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
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
                clients &&
                clients.map((client) => (
                  <tr key={client.email} className="border-b">
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
        </div>
      </div>
    </>
  );
}
