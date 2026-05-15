import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Profile from "./pages/Profile.tsx";
import RootLayout from "./components/RootLayout.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      // paginas publicas aqui
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
