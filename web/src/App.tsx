import { queryClient } from "./libs/react-query";
import { Home } from "./pages/app/home";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
