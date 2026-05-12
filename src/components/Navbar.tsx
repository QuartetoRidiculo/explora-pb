import { Compass, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-sm h-20 flex items-center justify-around">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-9 h-9 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
          <Compass className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-heading font-bold">Explora</h1>
      </Link>

      <ul className="flex items-center gap-6">
        <li>
          <Link
            to="/explore"
            className="text-gray-500 px-4 py-2 hover:bg-gray-200 rounded-2xl hover:text-black"
          >
            Explorar
          </Link>
        </li>
        <li>
          <Link
            to="/cities"
            className="text-gray-500 px-4 py-2 hover:bg-gray-200 rounded-2xl hover:text-black"
          >
            Cidades
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li>
          <Link to="/favorites">
            <Heart className="hover:text-emerald-700 duration-150" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <User className="hover:text-emerald-700 duration-150" />
          </Link>
        </li>
        <li>
          <Link to="/login" className="px-5 py-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-4xl">
            Entrar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
