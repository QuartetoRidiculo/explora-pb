import { Star, MapPin } from "lucide-react";

interface RestaurantProps {
  name: string;
  city: string;
  image: string;
  rating: number;
  cuisine: string;
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantProps;
}) {
  return (
    <div className="group flex gap-4 p-3 rounded-xl hover:bg-gray-200/50 transition-colors cursor-pointer">
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm">
          {restaurant.name}
        </h4>
        <div className="flex items-center gap-1.5 mt-1">
          <MapPin className="w-3 h-3 text-gray-500" />
          <span className="text-xs text-gray-500">
            {restaurant.city}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold">{restaurant.rating}</span>
          </div>
          <div className="text-xs font-semibold py-1 px-4 rounded-2xl border border-gray-200">
            {restaurant.cuisine}
          </div>
        </div>
      </div>
    </div>
  );
}
