import {
  Search,
} from "lucide-react";

import Footer from "../../components/Footer";
import DestinationCard from "../../components/DestinationCard";

const cards = [
  {
    href: "/explore",
    rating: 4.8,
    title: "Paris",
    location: "França",
    imgUrl: "/img/paris.jpg",
    qtdReviews: 120,
  },

  {
    href: "/explore",
    rating: 4.5,
    title: "Roma",
    location: "Itália",
    imgUrl: "/img/roma.jpg",
    qtdReviews: 98,
  },
];

export default function Explore() {
  return (
    <div className="m-4">

      <div className="bg-blue-200 p-4 gap-2">
        <h1 className="text-4xl">
          Explorar Destinos
        </h1>

        <p className="text-gray-200">
          8 destinos encontrados
        </p>
      </div>

      <div className="p-2 flex gap-2 justify-around">
        <div className="relative w-3/4">

          <Search className="absolute " />

          <input
            className="bg-amber-100 w-full h-full"
            type="text"
          />
        </div>
      </div>

      <button className="border-2 border-gray-300">
        Filtros
      </button>

      <select>
        <option>Mais procurados</option>
      </select>

      <div className="grid gap-4">
        {cards.map((card) => (
          <DestinationCard
            key={card.title}
            props={card}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}