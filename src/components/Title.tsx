import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function Title({ color }: { color: "white" | "black" }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-9 h-9 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
        <Compass className="w-5 h-5 text-white" />
      </div>
      <h1
        className={`text-xl font-heading font-bold font-playfair text-${color}`}
      >
        Explora<span className="uppercase text-emerald-500">pb</span>
      </h1>
    </Link>
  );
}
