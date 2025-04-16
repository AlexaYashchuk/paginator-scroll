import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./RTK/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
