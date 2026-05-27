import {
  ArrowLeft,
  Star,
  MapPin,
  Utensils,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cities, destinations, restaurants } from "../../lib/mockData";
import NotFoundPage from "../NotFoundPage";
import DestinationCard from "../../components/DestinationCard";

export default function CitiesInfo() {
  const { id } = useParams();

  const city = cities.find((city) => city.id === Number(id));

  if (!city) {
    return <NotFoundPage />;
  }

  const cityDestinations = destinations.filter(
    (destination) => destination.city === city.name,
  );

  const cityRestaurants = restaurants.filter(
    (restaurant) => restaurant.city === city.name,
  );

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <div className="relative h-[460px] overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute top-8 left-8">
          <Link
            to="/cidades"
            className="
                            bg-white/20
                            backdrop-blur-md
                            text-white
                            px-5
                            py-3
                            rounded-full
                            flex
                            items-center
                            gap-3
                            hover:bg-white/30
                            duration-300
                        "
          >
            <ArrowLeft size={18} />
            Cidades
          </Link>
        </div>

        <div
          className="
                        absolute
                        bottom-12
                        left-24
                        max-w-[620px]
                        text-white
                    "
        >
          <span
            className="
                            bg-white/20
                            px-3
                            py-[6px]
                            rounded-full
                            text-xs
                        "
          >
            Cidade
          </span>

          <h1
            className="
                            text-5xl
                            font-black
                            mt-5
                        "
          >
            {city.name}
          </h1>

          <p
            className="
                            text-xl
                            mt-5
                            leading-9
                            text-gray-200
                            pb-8
                        "
          >
            {city.description}
          </p>
        </div>
      </div>

      <div
        className="
                    max-w-[1200px]
                    mx-auto
                    grid
                    grid-cols-3
                    gap-6
                    -mt-14
                    relative
                    z-10
                    px-6
                "
      >
        <div
          className="
                        bg-white
                        rounded-3xl
                        p-7
                        shadow-md
                        text-center
                    "
        >
          <ArrowRight size={28} className="mx-auto text-green-500" />

          <h1 className="text-4xl font-black mt-4">{city.stats.visitors}</h1>

          <p className="text-gray-500 mt-2">Visitantes/ano</p>
        </div>

        <div
          className="
                        bg-white
                        rounded-3xl
                        p-7
                        shadow-md
                        text-center
                    "
        >
          <Star size={28} className="mx-auto text-green-500" />

          <h1 className="text-4xl font-black mt-4">
            {city.stats.satisfaction}
          </h1>

          <p className="text-gray-500 mt-2">Satisfação</p>
        </div>

        <div
          className="
                        bg-white
                        rounded-3xl
                        p-7
                        shadow-md
                        text-center
                    "
        >
          <Landmark size={28} className="mx-auto text-green-500" />

          <h1 className="text-4xl font-black mt-4">{city.stats.attractions}</h1>

          <p className="text-gray-500 mt-2">Atrações</p>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-6 mt-20">
        <h1 className="text-5xl font-black">Destaques</h1>

        <p className="text-gray-500 text-xl mt-3">
          Os pontos que você não pode perder em {city.name}.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          {city.highlights.map((highlight, index) => (
            <div
              key={index}
              className="
                                bg-[#f1ede7]
                                px-5
                                py-3
                                rounded-full
                                text-base
                                font-medium
                            "
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 mt-24">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-black">Atrações populares</h1>

            <p className="text-gray-500 text-xl mt-3">
              Destinos em {city.name}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-12">
          {cityDestinations.map((destination) => (
            <DestinationCard destination={destination}/>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 mt-24 pb-16">
        <div className="flex items-center gap-5">
          <div
            className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-orange-100
                            flex
                            items-center
                            justify-center
                        "
          >
            <Utensils className="text-orange-500" />
          </div>

          <h1 className="text-4xl font-black">Gastronomia local</h1>
        </div>

        <div
          className="
                        bg-white
                        shadow-md
                        rounded-3xl
                        p-8
                        mt-8
                        flex
                        flex-wrap
                        gap-10
                    "
        >
          {cityRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="flex gap-5">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="
                                    w-24
                                    h-24
                                    rounded-2xl
                                    object-cover
                                "
              />

              <div>
                <h1 className="text-2xl font-bold">{restaurant.name}</h1>

                <div
                  className="
                                        flex
                                        items-center
                                        gap-2
                                        text-gray-500
                                        mt-2
                                    "
                >
                  <MapPin size={15} />
                  {restaurant.city}
                </div>

                <div
                  className="
                                        flex
                                        items-center
                                        gap-4
                                        mt-4
                                    "
                >
                  <div className="flex items-center gap-1">
                    <Star
                      size={15}
                      className="text-yellow-500"
                      fill="currentColor"
                    />

                    {restaurant.rating}
                  </div>

                  {/* <span
                                        className="
                                            border
                                            px-4
                                            py-1
                                            rounded-full
                                            text-sm
                                        "
                                    >
                                        {restaurant.cuisine}
                                    </span> */}

                  <span className="text-gray-500">{restaurant.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
