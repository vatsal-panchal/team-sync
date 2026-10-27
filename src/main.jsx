import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import AppRoutes from "./app/routes/AppRoutes.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    // Provider makes the Redux store available to all child components.
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    ,
  </QueryClientProvider>,
);
