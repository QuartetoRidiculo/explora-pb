import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Destination } from "../types";
import { useState } from "react";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={`/destino/${destination.id}`}>
      <div className="group rounded-2xl overflow-hidden shadow-md max-w-sm w-full bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative overflow-hidden h-64">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
             
              setLiked(!liked);
            }}
            className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm p-2 rounded-full transition hover:scale-110 cursor-pointer"
          >
            <Heart
              className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
            />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-emerald-700 font-playfair">
            {destination.name}
          </h3>

          <p className="text-gray-500 flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {destination.city}
          </p>

          <div className="flex gap-4 items-center">
            <span className="flex gap-2 items-center font-bold text-gray-800">
              <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
              {destination.rating}
            </span>

            <span className="text-gray-500">({destination.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
