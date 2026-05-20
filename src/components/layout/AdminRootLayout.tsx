import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function AdminRootLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}
