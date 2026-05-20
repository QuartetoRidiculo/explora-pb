import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Cities from "./pages/cities/Cities.tsx";
import CitiesInfo from "./pages/cities/CitiesInfo.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Explore from "./pages/explore/Explore.tsx";
import NotFound from "./pages/NotFound.tsx";
import Favorite from "./pages/Favorite.tsx";
import Profile from "./pages/Profile.tsx";
import DestinationDetail from "./pages/DestinationDetail.tsx";
import Favorite from "./pages/Favorite.tsx";
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
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/destination/:id",
        element: <DestinationDetail />,
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <CitiesInfo />,
      },
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
