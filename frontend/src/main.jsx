import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Importer le Router
import { createRoot } from "react-dom/client";
import Routing from "./router/index";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import { UsersProvider } from "./context/UsersContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UsersProvider>
      <Router>
        <Sidebar />
        <Routing />
      </Router>
    </UsersProvider>
  </React.StrictMode>
);
