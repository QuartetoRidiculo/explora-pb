import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Cities from "./pages/cities/Cities.tsx";
import CitiesInfo from "./pages/cities/CitiesInfo.tsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      }
    ]
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cidades",
    element: <Cities />,
  },
  {
    path: "/cidades/:id",
    element: <CitiesInfo />
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
