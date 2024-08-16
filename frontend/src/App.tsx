import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Template } from "./components/shared/template/Template";
import { HomePage } from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Template>
        <HomePage />
      </Template>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
