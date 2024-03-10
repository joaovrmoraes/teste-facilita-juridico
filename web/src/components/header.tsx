export function Header() {
  return (
    <header className="min-h-14 p-4 border border-b-gray-300 bg-slate-900 flex justify-between w-screen items-center">
      <h1 className="font-semibold text-gray-100">Client Management</h1>
      <button className="p-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-500/50">
        Novo Cliente
      </button>
    </header>
  )
}
