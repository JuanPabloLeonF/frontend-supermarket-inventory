import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ServicesProvider } from "./app/share/context/ServicesProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicesProvider>
      <p>aplicacion</p>
    </ServicesProvider>
  </StrictMode>,
);
