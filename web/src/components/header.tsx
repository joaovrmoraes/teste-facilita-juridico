import { Button } from "./button";

export function Header() {
  return (
    <header className="flex min-h-14 w-screen items-center justify-between bg-slate-900 p-4">
      <h1 className="text-base font-semibold text-gray-100">
        GESTÃO DE CLIENTES
      </h1>

      <Button variant="success">Novo Cliente</Button>
    </header>
  );
}
