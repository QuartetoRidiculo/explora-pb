import { Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Title from "./Title";

export default function Navbar() {
  const isHome = useLocation().pathname === "/";

  return (
    <nav
      className={`${isHome ? "fixed bg-transparent" : "sticky bg-white/80 shadow-sm"} top-0 left-0 right-0 z-50 backdrop-blur-xl h-20 flex items-center justify-around`}
    >
      <Title color={`${isHome ? "white" : "black"}`} />

      <ul
        className={`${isHome ? "text-white" : "text-gray-500"} flex items-center gap-6`}
      >
        <li>
          <Link
            to="/explore"
            className="px-4 py-2 hover:bg-gray-200/50 rounded-2xl hover:text-black"
          >
            Explorar
          </Link>
        </li>
        <li>
          <Link
            to="/cities"
            className="px-4 py-2 hover:bg-gray-200/50 rounded-2xl hover:text-black"
          >
            Cidades
          </Link>
        </li>
      </ul>

      <ul
        className={`${isHome ? "text-white" : "text-gray-500"} flex items-center gap-2`}
      >
        <li
          className={`${isHome ? "hover:bg-gray-100/40" : "hover:bg-gray-200/50"} p-2 rounded-full`}
        >
          <Link to="/favorites">
            <Heart />
          </Link>
        </li>
        <li
          className={`${isHome ? "hover:bg-gray-100/40" : "hover:bg-gray-200/50"} p-2 rounded-full`}
        >
          <Link to="/profile">
            <User />
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="px-5 py-3 bg-emerald-500 text-white hover:bg-emerald-500/90 rounded-4xl"
          >
            Entrar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
