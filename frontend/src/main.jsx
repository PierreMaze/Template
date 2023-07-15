import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./pages/Users";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebar />
    <Users />
  </React.StrictMode>
);
