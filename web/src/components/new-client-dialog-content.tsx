import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Input } from "./input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";
import { useMutation } from "@tanstack/react-query";
import { postNewClient } from "@/api/post-new-client";
import { queryClient } from "@/libs/react-query";

const newClientFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  coordinates: z.object({
    x: z.number(),
    y: z.number(),
  }),
});

type NewClientForm = z.infer<typeof newClientFormSchema>;

export function NewClientDialogContent() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewClientForm>();

  const { mutateAsync: createNewClient } = useMutation({
    mutationKey: ["new-client"],
    mutationFn: async (data: NewClientForm) => {
      postNewClient(data);
    },
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
  });

  const handleAddClient = async (data: NewClientForm) => {
    data.coordinates.x = Number(data.coordinates.x);
    data.coordinates.y = Number(data.coordinates.y);
    createNewClient(data);
  };

  return (
    <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
      <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
        Adicionar Cliente
      </Dialog.Title>
      <div>
        <form
          className="flex flex-col gap-2 py-4"
          onSubmit={handleSubmit(handleAddClient)}
        >
          <label>Nome:</label>
          <Controller
            control={control}
            name="name"
            defaultValue={""}
            render={({ field }) => <Input {...field} />}
          />
          <label>E-mail:</label>
          <Controller
            control={control}
            name="email"
            defaultValue={""}
            render={({ field }) => <Input {...field} />}
          />

          <label>Telefone:</label>
          <Controller
            control={control}
            name="phone"
            defaultValue={""}
            render={({ field }) => <Input {...field} />}
          />

          <div className="flex gap-4">
            <div>
              <label>Coordenadas X:</label>
              <Controller
                control={control}
                name="coordinates.x"
                defaultValue={0}
                render={({ field }) => <Input {...field} />}
              />
            </div>
            <div>
              <label>Coordenadas. Y:</label>
              <Controller
                control={control}
                name="coordinates.y"
                defaultValue={0}
                render={({ field }) => <Input {...field} />}
              />
            </div>
          </div>

          {/* <label>Coordernadas:</label>
          <Controller
            control={control}
            name="coordinates"
            defaultValue={{ x: 0, y: 0 }}
            render={({ field }) => (
              <div className="flex w-full items-center justify-center">
                <Map field={field} />
              </div>
            )}
          /> */}

          <Button type="submit">
            {isSubmitting ? "Adicionando..." : "Adicionar Cliente"}
          </Button>
        </form>
      </div>

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
