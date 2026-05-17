import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Profile from "./pages/Profile.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Explore from "./pages/explore/Explore.tsx";

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
    path: "/explore",
    element: <Explore />
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


]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);