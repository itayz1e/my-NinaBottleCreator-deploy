import React from "react";
// ** React Imports
import ReactDOM from "react-dom/client";

// ** Components Imports
import App from "./pages/App.tsx";
import Login from "./pages/Login.tsx";
import { ImageProvider } from "./hooks/ImageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login>
      <ImageProvider>
        <App />
      </ImageProvider>
    </Login>
  </React.StrictMode>
);
