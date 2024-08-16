import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Template } from "./components/shared/template/Template";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Template>
        <HomePage />
      </Template>
    </QueryClientProvider>
  );
}

export default App;
