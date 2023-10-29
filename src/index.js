import React from "react";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom
import App from "./App";
// import "./styles/index.scss";

// Utilisez createRoot pour monter l'application
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
