import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface CardProps {
  href: string;
  rating: number;
  title: string;
  location: string;
  imgUrl: string;
  qtdReviews: number;
}

export default function DestinationCard({ props }: { props: CardProps }) {
  return (
    <Link to={props.href}>
      <div className="group rounded-2xl overflow-hidden shadow-md max-w-sm w-full bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative overflow-hidden h-56">
          <img
            src={props.imgUrl}
            alt={props.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm p-2 rounded-full transition hover:scale-110 cursor-pointer">
            <Heart />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-700">{props.title}</h3>

          <p className="text-gray-500 flex items-center gap-1">
            <MapPin className="w-4 h-4"/> {props.location}
          </p>

          <div className="flex gap-4 items-center">
            <span className="flex gap-2 items-center font-bold text-gray-800">
              <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
              {props.rating}
            </span>

            <span className="text-gray-500">({props.qtdReviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
