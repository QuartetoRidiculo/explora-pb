import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage.tsx";
import RootLayout from "./components/layout/RootLayout.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import DestinationDetailPage from "./pages/DestinationDetailPage.tsx";
import AdminDestinationsPage from "./pages/admin/AdminDestinationsPage.tsx";
import AdminRootLayout from "./components/layout/AdminRootLayout.tsx";
import AdminCitiesPage from "./pages/admin/AdminCitiesPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AdminBusinessPage from "./pages/admin/AdminBusinessPage.tsx";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage.tsx";
import Cities from "./pages/cities/Cities.tsx";
import CitiesInfo from "./pages/cities/CitiesInfo.tsx";
import AuthPage from "./pages/AuthPage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/admin",
    element: <AdminRootLayout />,
    children: [
      {
        path: "/admin/destinos",
        element: <AdminDestinationsPage />,
      },
      {
        path: "/admin/cidades",
        element: <AdminCitiesPage />,
      },
      {
        path: "comercios",
        element: <AdminBusinessPage />,
      },
      {
        path: "categorias",
        element: <AdminCategoriesPage />,
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
        path: "/destino/:id",
        element: <DestinationDetailPage />,
      },
      {
        path: "/cidades",
        element: <Cities />,
      },
      {
        path: "/cidades/:id",
        element: <CitiesInfo />,
      },
      {
        path: "/perfil",
        element: <ProfilePage />,
      },
      {
        path: "/favoritos",
        element: <FavoritesPage />,
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
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
