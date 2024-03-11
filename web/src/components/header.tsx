import { Button } from "./button";
import * as Dialog from "@radix-ui/react-dialog";
import { NewClientDialogContent } from "./new-client-dialog-content";

export function Header() {
  return (
    <header className="flex min-h-14 w-screen items-center justify-between bg-slate-900 p-4">
      <h1 className="text-base font-semibold text-gray-100">
        GESTÃO DE CLIENTES
      </h1>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="success">Novo Cliente</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
          <NewClientDialogContent />
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
