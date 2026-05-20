import {
  ArrowRight,
  Footprints,
  Landmark,
  Mountain,
  Sparkles,
  TreePalm,
  TreePine,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import DestinationCard from "./components/DestinationCard";
import RestaurantCard from "./components/RestaurantCard";
import { Link } from "react-router-dom";
import { cities, destinations, restaurants } from "./lib/mockData";

export default function App() {
  return (
    <>
      <section className="h-screen relative flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="..."
          className="absolute w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <h1 className="text-7xl font-playfair font-bold text-white">
            Descubra a <span className="text-cyan-300">Paraíba</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-lg leading-relaxed">
            Do sertão cinematográfico às praias paradisíacas. Explore tesouros
            escondidos no estado mais acolhedor do Brasil.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-playfair font-semibold text-3xl text-white">
                200+
              </span>
              <span className="text-gray-200">Destinos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-playfair font-semibold text-3xl text-white">
                50+
              </span>
              <span className="text-gray-200">Cidades</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-playfair font-semibold text-3xl text-white">
                15K
              </span>
              <span className="text-gray-200">Avaliações</span>
            </div>
          </div>
        </div>
      </section>

      <section className="h-150 flex flex-col justify-center items-center gap-4">
        <span className="bg-emerald-200 flex gap-2 px-4 py-2 rounded-4xl font-semibold text-emerald-500">
          <Sparkles />
          Categorias
        </span>
        <h2 className="text-5xl font-bold font-playfair">
          Que tipo de aventura te espera?
        </h2>
        <p className="text-center text-gray-500 text-xl">
          Explore por categoria e encontre exatamente o que
          <br /> combina com seu estilo de viagem.
        </p>

        <div className="flex gap-4 mt-8">
          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-blue-200">
              <TreePalm className="text-blue-500" />
            </div>
            <h4 className="font-semibold">Praias</h4>
            48 locais
          </div>
          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-purple-200">
              <Landmark className="text-purple-500" />
            </div>
            <h4 className="font-semibold">Cultura</h4>
            <span className="text-sm text-gray-500">32 locais</span>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-orange-200">
              <UtensilsCrossed className="text-orange-500" />
            </div>
            <h4 className="font-semibold">Gastronomia</h4>
            <span className="text-sm text-gray-500">56 locais</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-green-200">
              <Mountain className="text-green-700" />
            </div>
            <h4 className="font-semibold">Aventura</h4>
            <span className="text-sm text-gray-500">24 locais</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-green-200">
              <TreePine className="text-green-700" />
            </div>
            <h4 className="font-semibold">Ecoturismo</h4>
            <span className="text-sm text-gray-500">18 locais</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center rounded-xl bg-white h-44 w-44 hover:shadow-xl">
            <div className="p-4 rounded-2xl bg-orange-200">
              <Footprints className="text-orange-500" />
            </div>
            <h4 className="font-semibold">Trilhas</h4>
            <span className="text-sm text-gray-500">15 locais</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-16 space-y-4">
          <div className="text-green-700 flex items-center gap-4">
            <div className="flex justify-center items-center w-12 h-12 rounded-2xl bg-green-200">
              <TrendingUp />
            </div>{" "}
            <span className="uppercase font-semibold">Populares</span>
          </div>
          <h2 className="text-5xl font-playfair font-bold">Destinos em alta</h2>
          <p className="text-xl text-gray-500">
            Os lugares mais procurados pelos exploradores da Paraíba nesta
            temporada.
          </p>
          <div className="grid grid-cols-4 mt-16 gap-4">
            {destinations.slice(0, 4).map((destination) => (
              <DestinationCard destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-playfair font-bold">
              Cidades para explorar
            </h2>
            <p className="text-xl text-gray-500">
              Cada cidade da Paraíba tem sua personalidade, sabor e história
              para contar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {cities.slice(0, 5).map((city, i) => (
              <div className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
                <Link
                  to={`/cidade/${city.id}`}
                  className="group block relative rounded-2xl overflow-hidden h-full min-h-60"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-heading font-bold text-2xl">
                      {city.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-white/70 text-sm">
                      <span>{city.attractions} atrações</span>
                      <span>•</span>
                      <span>{city.restaurants} restaurantes</span>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-white/80 text-sm font-medium group-hover:text-emerald-300 transition-colors">
                      <span>Explorar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-16 space-y-4">
          <div className="text-orange-500 flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-orange-200">
              <UtensilsCrossed />
            </div>
            <span className="uppercase font-semibold">Gastronomia</span>
          </div>
          <h2 className="text-5xl font-bold font-playfair">
            Sabores da Paraíba
          </h2>
          <p className="text-xl text-gray-500">
            De pratos regionais autênticos a restaurantes sofisticados. A
            culinária paraibana vai te conquistar.
          </p>
          <div className="grid grid-cols-3 grid-rows-2 mt-16 gap-4">
            {restaurants.slice(0, 6).map((restaurant) => (
              <RestaurantCard restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
