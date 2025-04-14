// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./LanguageContext.tsx"; // ✅ Agregado

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider> {/* ✅ Envolver App acá */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);