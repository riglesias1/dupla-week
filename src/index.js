import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import App from "./App";
import "./index.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </HashRouter>
  </React.StrictMode>
);
