export const categories = [
  { id: 1, name: "Praias" },
  { id: 2, name: "Cultura" },
  {
    id: 3,
    name: "Gastronomia",
    count: 56,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: 4,
    name: "Aventura",
    count: 24,
    color: "bg-emerald-50 text-emerald-600",
  },
  { id: 5, name: "Ecoturismo", count: 18, color: "bg-green-50 text-green-600" },
  { id: 6, name: "Trilhas", count: 15, color: "bg-amber-50 text-amber-600" },
  { id: 7, name: "Histórico", count: 21, color: "bg-rose-50 text-rose-600" },
];

export const destinations = [
  {
    id: 1,
    name: "Praia de Tambaba",
    zipCode: "58322-000",
    state: "PB",
    neighborhood: "Tambaba",
    street: "Rodovia PB-008",
    number: "S/N",
    city: "Conde",
    cityId: 2,
    category: "Praias",
    rating: 4.8,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description:
      "Uma das praias mais bonitas do litoral paraibano, Tambaba é famosa por sua natureza preservada, falésias impressionantes e águas cristalinas.",
    featured: true,
    hidden_gem: false,
    latitude: -7.3167,
    longitude: -34.7972,
    hours: "Acesso livre - 24h",
    tips:
      "Chegue cedo para aproveitar a maré baixa e as piscinas naturais.",
    climate: "Tropical úmido, 28°C média",
    tags: ["Natureza", "Praia", "Naturismo", "Falésias"],
  },
  {
    id: 2,
    name: "Lajedo do Pai Mateus",
    zipCode: "58480-000",
    state: "PB",
    neighborhood: "Zona Rural",
    street: "Sítio Pai Mateus",
    number: "S/N",
    city: "Cabaceiras",
    cityId: 3,
    category: "Aventura",
    rating: 4.9,
    reviews: 456,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Um dos sítios arqueológicos mais impressionantes do Nordeste.",
    featured: true,
    hidden_gem: true,
    latitude: -7.4833,
    longitude: -36.2833,
    hours: "06:00 - 17:00",
    tips:
      "Use calçado adequado para trilhas e leve bastante água.",
    climate: "Semiárido, 32°C média",
    tags: ["Arqueologia", "Trilha", "Sertão"],
  },
  {
    id: 3,
    name: "Pôr do Sol na Praia do Jacaré",
    zipCode: "58100-000",
    state: "PB",
    neighborhood: "Jacaré",
    street: "Rua do Rio",
    number: "120",
    city: "Cabedelo",
    cityId: 4,
    category: "Cultura",
    rating: 4.7,
    reviews: 892,
    image:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    description:
      "O famoso Bolero de Ravel ao vivo enquanto o sol mergulha no horizonte.",
    featured: true,
    hidden_gem: false,
    latitude: -7.0333,
    longitude: -34.85,
    hours: "16:30 - 18:00",
    tips:
      "Chegue cedo para garantir um bom lugar próximo ao rio.",
    climate: "Tropical, 29°C média",
    tags: ["Pôr do Sol", "Música", "Cultural"],
  },
  {
    id: 4,
    name: "Praia de Coqueirinho",
    zipCode: "58322-000",
    state: "PB",
    neighborhood: "Coqueirinho",
    street: "Rodovia PB-008",
    number: "S/N",
    city: "Conde",
    cityId: 2,
    category: "Praias",
    rating: 4.9,
    reviews: 567,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    description:
      "Uma das praias mais bonitas do Brasil, cercada por falésias.",
    featured: true,
    hidden_gem: false,
    latitude: -7.3,
    longitude: -34.7833,
    hours: "Acesso livre - 24h",
    tips:
      "A vista do mirante é absurda. Vá no fim da tarde.",
    climate: "Tropical úmido, 28°C média",
    tags: ["Praia", "Falésias", "Mirante"],
  },
  {
    id: 5,
    name: "Centro Histórico de Areia",
    zipCode: "58397-000",
    state: "PB",
    neighborhood: "Centro",
    street: "Praça Pedro Américo",
    number: "45",
    city: "Areia",
    cityId: 5,
    category: "Histórico",
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    description:
      "Cidade histórica com casarões coloniais e engenhos.",
    featured: false,
    hidden_gem: true,
    latitude: -6.9667,
    longitude: -35.6833,
    hours: "Acesso livre",
    tips:
      "Experimente as cachaças artesanais da região.",
    climate: "Tropical de altitude, 24°C média",
    tags: ["Colonial", "Museu", "Brejo"],
  },
  {
    id: 6,
    name: "Picãozinho",
    zipCode: "58039-000",
    state: "PB",
    neighborhood: "Tambaú",
    street: "Orla de Tambaú",
    number: "S/N",
    city: "João Pessoa",
    cityId: 1,
    category: "Praias",
    rating: 4.4,
    reviews: 678,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    description:
      "Piscinas naturais com águas cristalinas e peixes coloridos.",
    featured: true,
    hidden_gem: false,
    latitude: -7.1167,
    longitude: -34.8167,
    hours: "Depende da maré baixa",
    tips:
      "Consulte a tábua de marés antes de visitar.",
    climate: "Tropical, 28°C média",
    tags: ["Piscinas Naturais", "Coral", "Mergulho"],
  },
  {
    id: 7,
    name: "Trilha do Cariri",
    zipCode: "58123-000",
    state: "PB",
    neighborhood: "Zona Rural",
    street: "Serra do Cariri",
    number: "S/N",
    city: "Boa Vista",
    cityId: 7,
    category: "Trilhas",
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    description:
      "Trilha épica pelo sertão paraibano com paisagens incríveis.",
    featured: false,
    hidden_gem: true,
    latitude: -7.25,
    longitude: -36.2333,
    hours: "05:00 - 16:00",
    tips:
      "Leve água e contrate um guia local.",
    climate: "Semiárido, 34°C média",
    tags: ["Trilha", "Caatinga", "Aventura"],
  },
];

export const cities = [
  {
    id: 1,
    name: "João Pessoa",
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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
    state: "PB",
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

export const restaurants = [
  {
    id: 1,
    name: "Mangai",
    category: "Regional",
    description:
      "O melhor da culinária nordestina em um ambiente elegante e acolhedor.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",

    city: "João Pessoa",
    state: "PB",
    zipCode: "58039-000",
    neighborhood: "Manaíra",
    street: "Av. Edson Ramalho",
    number: "123",

    rating: 4.8,
    priceRange: "$$",

    phone: "(83) 99999-1111",
    instagram: "@mangai",
  },

  {
    id: 2,
    name: "Nau Frutos do Mar",
    category: "Frutos do Mar",
    description:
      "Frutos do mar frescos com vista privilegiada para o oceano.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",

    city: "João Pessoa",
    state: "PB",
    zipCode: "58038-000",
    neighborhood: "Cabo Branco",
    street: "Av. Cabo Branco",
    number: "4580",

    rating: 4.7,
    priceRange: "$$$",

    phone: "(83) 99999-2222",
    instagram: "@naurestaurante",
  },

  {
    id: 3,
    name: "Empório Café",
    category: "Cafeteria",
    description:
      "Cafeteria artesanal com ambiente moderno e instagramável.",
    image:
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",

    city: "João Pessoa",
    state: "PB",
    zipCode: "58038-300",
    neighborhood: "Tambaú",
    street: "Rua Helena Meira Lima",
    number: "95",

    rating: 4.6,
    priceRange: "$$",

    phone: "(83) 99999-3333",
    instagram: "@emporiocafe",
  },

  {
    id: 4,
    name: "Bodegas do Sertão",
    category: "Sertaneja",
    description:
      "Comida típica sertaneja com sabores autênticos do interior paraibano.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",

    city: "Cabaceiras",
    state: "PB",
    zipCode: "58480-000",
    neighborhood: "Centro",
    street: "Rua Principal",
    number: "40",

    rating: 4.5,
    priceRange: "$",

    phone: "(83) 99999-4444",
    instagram: "@bodegasdosertao",
  },

  {
    id: 5,
    name: "Cozinha da Praia",
    category: "Praia",
    description:
      "Peixes e frutos do mar frescos servidos literalmente pé na areia.",
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80",

    city: "Conde",
    state: "PB",
    zipCode: "58322-000",
    neighborhood: "Jacumã",
    street: "Beira Mar",
    number: "S/N",

    rating: 4.4,
    priceRange: "$$",

    phone: "(83) 99999-5555",
    instagram: "@cozinhadapraia",
  },

  {
    id: 6,
    name: "Engenho Doce",
    category: "Doceria",
    description:
      "Doces artesanais tradicionais do brejo paraibano com receitas centenárias.",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",

    city: "Areia",
    state: "PB",
    zipCode: "58397-000",
    neighborhood: "Centro Histórico",
    street: "Rua do Comércio",
    number: "12",

    rating: 4.9,
    priceRange: "$",

    phone: "(83) 99999-6666",
    instagram: "@engenhodoce",
  },
];

export const reviews = [
  {
    id: 1,
    user: "Maria Silva",
    avatar: "MS",
    rating: 5,
    date: "2026-04-15",
    text: "Experiência incrível! O Lajedo do Pai Mateus é surreal. Parece outro planeta. Voltarei com certeza!",
    destinationId: 2,
  },
  {
    id: 2,
    user: "João Santos",
    avatar: "JS",
    rating: 5,
    date: "2026-03-28",
    text: "Coqueirinho é simplesmente a praia mais bonita que já visitei no Brasil inteiro. As falésias são de tirar o fôlego.",
    destinationId: 4,
  },
  {
    id: 3,
    user: "Ana Oliveira",
    avatar: "AO",
    rating: 4,
    date: "2026-04-02",
    text: "O pôr do sol no Jacaré é emocionante. O Bolero de Ravel ao vivo é de chorar. Experiência obrigatória!",
    destinationId: 3,
  },
  {
    id: 4,
    user: "Pedro Costa",
    avatar: "PC",
    rating: 5,
    date: "2026-03-10",
    text: "Tambaba é um paraíso preservado. Águas cristalinas e natureza intocada. Perfeita!",
    destinationId: 1,
  },
  {
    id: 5,
    user: "Carla Mendes",
    avatar: "CM",
    rating: 5,
    date: "2026-02-20",
    text: "A cidade de Areia me surpreendeu completamente. Cultura, gastronomia e história em cada esquina.",
    destinationId: 5,
  },
];

export const mockUser = {
  name: "Lucas Andrade",
  email: "lucas@email.com",
  avatar: "LA",
  favorites: [1, 2, 4, 7],
  reviewsCount: 8,
  tripsCount: 12,
  placesVisited: 23,
  memberSince: "Janeiro 2025",
  savedRoutes: [
    { id: 1, name: "Litoral Sul Completo", destinations: 5, days: 3 },
    { id: 2, name: "Sertão Cinematográfico", destinations: 4, days: 2 },
    { id: 3, name: "Rota Gastronômica JP", destinations: 8, days: 1 },
  ],
};
