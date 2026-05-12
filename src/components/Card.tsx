import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface CardProps {
  href: string;
  rating: number;
  title: string;
  location: string;
  imgUrl: string;
  qtdReviews: number;
}

export default function Card({ props }: { props: CardProps }) {
  return (
    <Link to={props.href}>
      <div className="rounded-md overflow-hidden shadow-md max-w-sm w-full">
        <div className="relative overflow-hidden">
          <img src={props.imgUrl} alt={props.title} className="w-full" />
          <button className="absolute top-4 right-4 bg-slate-50/50 p-2 rounded-full">
            <Heart />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl">{props.title}</h3>
          <p className="text-gray-500">{props.location}</p>
          <div className="flex gap-4 items-center">
            <span className="flex gap-2 items-center font-bold">
              <Star className="text-yellow-500" />
              {props.rating}
            </span>
            <span className="text-gray-500">
              {"("}
              {props.qtdReviews}
              {")"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
