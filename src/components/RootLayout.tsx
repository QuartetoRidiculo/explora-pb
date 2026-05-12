import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
