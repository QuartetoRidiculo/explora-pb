import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Star,
  MapPin,
  Clock,
  Sun,
  Share2,
  ChevronLeft,
  Navigation,
} from "lucide-react";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import RestaurantCard from "../components/RestaurantCard";
import { destinations, restaurants, reviews } from "../lib/mockData";
import ReviewCard from "../components/ReviewCard";

export default function DestinationDetailPage() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const dest = destinations.find((d) => d.id === Number(id)) || destinations[0];
  const destReviews = reviews.filter((r) => r.destinationId === dest.id);
  const nearbyRestaurants = restaurants.slice(0, 3);
  const related = destinations.filter((d) => d.id !== dest.id).slice(0, 4);

  return (
    <div>
      <div className="relative h-100">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

        <div className="absolute top-20 left-0 right-0 px-4 max-w-375 mx-auto flex justify-between items-center">
          <Link to="/explore">
            <button className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 px-6 py-2 cursor-pointer">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Voltar
            </button>
          </Link>
          <div className="flex gap-2">
            <button className="rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 p-4 cursor-pointer">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              className="rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 p-4 cursor-pointer"
              onClick={() => setLiked(!liked)}
            >
              <Heart
                className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 max-w-7xl mx-auto pb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {dest.tags?.map((tag) => (
              <div
                key={tag}
                className="bg-white/20 text-white backdrop-blur-sm border-none text-xs py-1 px-2 rounded-xl"
              >
                {tag}
              </div>
            ))}
          </div>
          <h1 className="text-5xl font-playfair font-bold text-white">
            {dest.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{dest.city}, Paraíba</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">{dest.rating}</span>
              <span>({dest.reviews} avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-32 py-12">
        <div className="grid grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Sobre o destino
              </h2>
              <p className="text-gray-500 text-xl">{dest.description}</p>
            </section>
            <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, label: "Horário", value: dest.hours },
                { icon: Sun, label: "Clima", value: dest.climate },
                { icon: MapPin, label: "Categoria", value: dest.category },
              ].map((info) => (
                <div
                  key={info.label}
                  className="p-4 rounded-2xl bg-gray-100/50 border border-gray-200"
                >
                  <info.icon className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-xs text-gray-500">{info.label}</p>
                  <p className="text-sm font-semibold mt-0.5">{info.value}</p>
                </div>
              ))}
            </section>
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">
                Avaliações
              </h2>
              {destReviews.length > 0 ? (
                <div className="space-y-4">
                  {destReviews.map((r) => (
                    <ReviewCard key={r.id} review={r} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-100/50 rounded-2xl">
                  <p className="text-gray-500 text-sm">
                    Seja o primeiro a avaliar este destino!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-lg">{dest.rating}</span>
                <span className="text-gray-500 text-sm">
                  · {dest.reviews} avaliações
                </span>
              </div>
              <button className="flex items-center justify-center w-full rounded-xl h-12 border border-gray-200 hover:bg-emerald-500 hover:text-white cursor-pointer">
                <Navigation className="w-5 h-5 mr-2" />
                Como chegar
              </button>
              <div className="bg-gray-200 mt-6 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">
                    Mapa interativo
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-heading font-bold text-lg mb-4">
                Restaurantes próximos
              </h3>
              <div className="space-y-1">
                {nearbyRestaurants.map((r) => (
                  <RestaurantCard key={r.id} restaurant={r} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Destinos relacionados
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {related.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
