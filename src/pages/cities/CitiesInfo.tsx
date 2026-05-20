import { ArrowLeft, Star, MapPin, Calendar, Utensils, Landmark, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cities, destinations, restaurants, events } from "../../lib/mockData";
import NotFound from "../NotFound";

export default function CitiesInfo() {

    const { id } = useParams();

    const city = cities.find(
        (city) => city.id === Number(id)
    );

    if (!city) {
        return <NotFound/>
    }

    const cityDestinations = destinations.filter(
        (destination) => destination.city === city.name
    );

    const cityRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === city.name
    );

    const cityEvents = events.filter(
        (event) => event.city === city.name
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
                        to="/cities"
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

                    <ArrowRight
                        size={28}
                        className="mx-auto text-green-500"
                    />

                    <h1 className="text-4xl font-black mt-4">
                        {city.stats.visitors}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Visitantes/ano
                    </p>

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

                    <Star
                        size={28}
                        className="mx-auto text-green-500"
                    />

                    <h1 className="text-4xl font-black mt-4">
                        {city.stats.satisfaction}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Satisfação
                    </p>

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

                    <Landmark
                        size={28}
                        className="mx-auto text-green-500"
                    />

                    <h1 className="text-4xl font-black mt-4">
                        {city.stats.attractions}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Atrações
                    </p>

                </div>

            </div>

            <section className="max-w-[1200px] mx-auto px-6 mt-20">

                <h1 className="text-5xl font-black">
                    Destaques
                </h1>

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

                        <h1 className="text-5xl font-black">
                            Atrações populares
                        </h1>

                        <p className="text-gray-500 text-xl mt-3">
                            Destinos em {city.name}
                        </p>

                    </div>

                </div>

                <div className="flex flex-wrap gap-8 mt-12">

                    {cityDestinations.map((destination) => (

                        <div
                            key={destination.id}
                            className="
                                w-[340px]
                                bg-white
                                rounded-3xl
                                overflow-hidden
                                shadow-sm
                                border
                            "
                        >

                            <div className="relative">

                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="
                                        w-full
                                        h-[210px]
                                        object-cover
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        top-5
                                        left-5
                                        bg-green-500
                                        text-white
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                    "
                                >
                                    Em alta
                                </div>

                            </div>

                            <div className="p-5">

                                <h1 className="text-2xl font-black">
                                    {destination.name}
                                </h1>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        mt-3
                                        text-gray-500
                                    "
                                >
                                    <MapPin size={16} />

                                    {destination.city}
                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        mt-4
                                    "
                                >

                                    <Star
                                        size={16}
                                        className="text-yellow-500"
                                        fill="currentColor"
                                    />

                                    <span className="text-lg font-semibold">
                                        {destination.rating}
                                    </span>

                                    <span className="text-gray-500">
                                        ({destination.reviews})
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <section className="max-w-[1200px] mx-auto px-6 mt-24">

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
                        <Utensils
                            className="text-orange-500"
                        />
                    </div>

                    <h1 className="text-4xl font-black">
                        Gastronomia local
                    </h1>

                </div>

                <div
                    className="
                        bg-white
                        border
                        rounded-3xl
                        p-8
                        mt-8
                        flex
                        flex-wrap
                        gap-10
                    "
                >

                    {cityRestaurants.map((restaurant) => (

                        <div
                            key={restaurant.id}
                            className="flex gap-5"
                        >

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

                                <h1 className="text-2xl font-bold">
                                    {restaurant.name}
                                </h1>

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

                                    <span
                                        className="
                                            border
                                            px-4
                                            py-1
                                            rounded-full
                                            text-sm
                                        "
                                    >
                                        {restaurant.cuisine}
                                    </span>

                                    <span className="text-gray-500">
                                        {restaurant.priceRange}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <section className="max-w-[1200px] mx-auto px-6 mt-24 pb-24">

                <div className="flex items-center gap-5">

                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-purple-100
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <Calendar
                            className="text-purple-500"
                        />
                    </div>

                    <h1 className="text-4xl font-black">
                        Eventos
                    </h1>

                </div>

                <div className="flex flex-wrap gap-8 mt-10">

                    {cityEvents.map((event) => (

                        <div
                            key={event.id}
                            className="
                                bg-white
                                border
                                rounded-3xl
                                p-6
                                flex
                                gap-6
                                w-[520px]
                            "
                        >

                            <img
                                src={event.image}
                                alt={event.name}
                                className="
                                    w-28
                                    h-28
                                    rounded-2xl
                                    object-cover
                                "
                            />

                            <div>

                                <span
                                    className="
                                        bg-[#f1ede7]
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                    "
                                >
                                    {event.category}
                                </span>

                                <h1 className="text-2xl font-black mt-4">
                                    {event.name}
                                </h1>

                                <p className="text-lg text-gray-500 mt-2">
                                    {event.date}
                                </p>

                                <p
                                    className="
                                        text-gray-600
                                        mt-3
                                        leading-relaxed
                                    "
                                >
                                    {event.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
}