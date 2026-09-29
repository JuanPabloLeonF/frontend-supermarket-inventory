import "./index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ServicesProvider } from "./app/share/context/ServicesProvider";
import { ContainerMain } from "./app/ui/layouts/container-main/ContainerMain";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/share/context/Store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <ContainerMain />
        </BrowserRouter>
      </Provider>
    </ServicesProvider>
  </StrictMode>,
);
