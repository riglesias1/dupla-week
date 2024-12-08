import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, useLocation } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import App from "./App";
import "./index.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <PrimeReactProvider>
        <ScrollToTop />
        <App />
      </PrimeReactProvider>
    </HashRouter>
  </React.StrictMode>
);
