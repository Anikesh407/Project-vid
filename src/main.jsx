import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="bottom-right" reverseOrder={false} />
  </BrowserRouter>
);
