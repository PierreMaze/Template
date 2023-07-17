import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./pages/Users";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import { UsersProvider } from "./context/UsersContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <Sidebar />
      <Users />
    </UsersProvider>
  </React.StrictMode>
);
