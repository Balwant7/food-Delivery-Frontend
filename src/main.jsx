import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import StorecontextProvider from "./context/Storecontext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StorecontextProvider>
      {/* <RouterProvider router={router}/> */}
      <Home />
    </StorecontextProvider>
  </StrictMode>
);
