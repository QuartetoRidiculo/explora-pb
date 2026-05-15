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

const featuredPlaces = [
  {
    href: "/destinos/praia-de-tambaba",
    rating: 4.8,
    title: "Praia de Tambaba",
    location: "Conde, PB",
    imgUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    qtdReviews: 324,
  },
  {
    href: "/destinos/lajedo-do-pai-mateus",
    rating: 4.9,
    title: "Lajedo do Pai Mateus",
    location: "Cabaceiras, PB",
    imgUrl:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80",
    qtdReviews: 456,
  },
  {
    href: "/destinos/praia-do-jacare",
    rating: 4.7,
    title: "Pôr do Sol na Praia do Jacaré",
    location: "Cabedelo, PB",
    imgUrl:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80",
    qtdReviews: 892,
  },
  {
    href: "/destinos/praia-de-coqueirinho",
    rating: 4.9,
    title: "Praia de Coqueirinho",
    location: "Conde, PB",
    imgUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    qtdReviews: 567,
  },
];

const restaurants = [
  {
    name: "Mangai",
    city: "João Pessoa",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    rating: 4.8,
    cuisine: "Regional",
  },
  {
    name: "Nau Frutos do Mar",
    city: "João Pessoa",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    rating: 4.7,
    cuisine: "Frutos do Mar",
  },
  {
    name: "Empório Café",
    city: "João Pessoa",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    rating: 4.6,
    cuisine: "Café",
  },
  {
    name: "Bodegas do Sertão",
    city: "Cabaceiras",
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80",
    rating: 4.5,
    cuisine: "Sertaneja",
  },
  {
    name: "Cozinha da Praia",
    city: "Conde",
    image:
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    rating: 4.4,
    cuisine: "Praia",
  },
  {
    name: "Engenho Doce",
    city: "Areia",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    rating: 4.9,
    cuisine: "Doces Regionais",
  },
];

const cities = [
  {
    id: 1,
    name: "João Pessoa",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    description:
      "A capital da Paraíba é conhecida por ser a cidade mais verde das Américas. Com praias urbanas paradisíacas, gastronomia rica e o ponto mais oriental das Américas.",
    attractions: 45,
    restaurants: 120,
    events: 18,
    population: "817 mil",
    stats: { visitors: "2.3M", satisfaction: "94%", attractions: 45 },
    highlights: [
      "Ponta do Seixas",
      "Estação Cabo Branco",
      "Praia de Tambaú",
      "Centro Histórico",
    ],
  },
  {
    id: 2,
    name: "Conde",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description:
      "O litoral sul da Paraíba abriga as praias mais preservadas e bonitas do estado. Tambaba, Coqueirinho e Tabatinga são paraísos tropicais.",
    attractions: 18,
    restaurants: 32,
    events: 5,
    population: "25 mil",
    stats: { visitors: "890K", satisfaction: "97%", attractions: 18 },
    highlights: [
      "Praia de Tambaba",
      "Coqueirinho",
      "Tabatinga",
      "Praia de Jacumã",
    ],
  },
  {
    id: 3,
    name: "Cabaceiras",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "A Roliúde Nordestina, como é carinhosamente chamada, é cenário de mais de 30 filmes e possui formações rochosas espetaculares no sertão.",
    attractions: 12,
    restaurants: 8,
    events: 6,
    population: "5.5 mil",
    stats: { visitors: "340K", satisfaction: "96%", attractions: 12 },
    highlights: [
      "Lajedo do Pai Mateus",
      "Lajedo de Bravo",
      "Festa do Bode Rei",
    ],
  },
  {
    id: 4,
    name: "Cabedelo",
    image:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    description:
      "Cidade litorânea famosa pelo épico pôr do sol na Praia do Jacaré, com a trilha sonora do Bolero de Ravel tocado ao vivo.",
    attractions: 15,
    restaurants: 28,
    events: 8,
    population: "68 mil",
    stats: { visitors: "1.1M", satisfaction: "95%", attractions: 15 },
    highlights: ["Praia do Jacaré", "Forte de Santa Catarina", "Intermares"],
  },
  {
    id: 5,
    name: "Areia",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    description:
      "No Brejo Paraibano, Areia é um tesouro cultural com clima ameno, casarões históricos, engenhos de cachaça e uma gastronomia regional incomparável.",
    attractions: 14,
    restaurants: 16,
    events: 10,
    population: "23 mil",
    stats: { visitors: "450K", satisfaction: "93%", attractions: 14 },
    highlights: ["Museu Pedro Américo", "Teatro Minerva", "Engenho Triunfo"],
  },
  {
    id: 6,
    name: "Campina Grande",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    description:
      "A segunda maior cidade da Paraíba é famosa pelo Maior São João do Mundo, pelo clima ameno e pelo polo tecnológico e universitário do interior nordestino.",
    attractions: 28,
    restaurants: 95,
    events: 22,
    population: "415 mil",
    stats: { visitors: "1.8M", satisfaction: "92%", attractions: 28 },
    highlights: [
      "Parque do Açude Novo",
      "Museu do Algodão",
      "São João de Campina",
      "Açude Velho",
    ],
  },
  {
    id: 7,
    name: "Sousa",
    image:
      "https://images.unsplash.com/photo-1606206873764-fd15e242b8f8?w=800&q=80",
    description:
      "Conhecida como a terra dos dinossauros, Sousa abriga o maior vale de pegadas de dinossauros do mundo, o Parque dos Dinossauros do Vale dos Dinossauros.",
    attractions: 10,
    restaurants: 22,
    events: 8,
    population: "70 mil",
    stats: { visitors: "280K", satisfaction: "91%", attractions: 10 },
    highlights: [
      "Vale dos Dinossauros",
      "Parque Estadual",
      "Açude São Gonçalo",
    ],
  },
  {
    id: 8,
    name: "Patos",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description:
      "No coração do sertão paraibano, Patos é porta de entrada para o agreste e destaque regional em cultura, comércio e nas belezas naturais do semiárido.",
    attractions: 9,
    restaurants: 35,
    events: 7,
    population: "108 mil",
    stats: { visitors: "190K", satisfaction: "89%", attractions: 9 },
    highlights: ["Parque da Cidade", "Serra do Teixeira", "Artesanato Local"],
  },
];

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

        <div className="flex gap-4 my-8">
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
          <div className="grid grid-cols-4 mt-16">
            {featuredPlaces.map((place) => (
              <DestinationCard props={place} />
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
            {restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
