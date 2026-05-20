import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "../../lib/mockData.ts";
import { Link } from "react-router-dom";


export default function CitiesCards({ name }) {

    const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(name.toLowerCase())
);

    return (
        <div className="flex items-center justify-center flex-wrap gap-6 mt-8 ml-4 mb-8 " >
            {
            
                 filteredCities.map((city) => (

                <div
                    key={city.id}
                    className="
                        w-[350px]
                        bg-white
                        rounded-3xl
                        shadow-md
                        overflow-hidden
                        hover:shadow-xl
                        duration-300
                    "
                >

                    <div className="relative">

                        <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-[210px] object-cover"
                        />

                        <div className="absolute bottom-5 left-5 text-white">

                            <h1 className="text-3xl font-bold">
                                {city.name}
                            </h1>

                            <div className="flex items-center gap-1 text-sm">
                                <MapPin size={16} />

                                <span>
                                    {city.population} habitantes
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="p-5">

                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            {city.description}
                        </p>

                        <div className="w-full h-[1px] bg-gray-200 my-5" />

                        <div className="flex justify-between text-center">

                            <div>

                                <h2 className="font-bold text-2xl">
                                    {city.stats.visitors}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    visitantes
                                </p>

                            </div>

                            <div>

                                <h2 className="font-bold text-2xl">
                                    {city.stats.satisfaction}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    satisfação
                                </p>

                            </div>

                            <div>

                                <h2 className="font-bold text-2xl">
                                    {city.stats.attractions}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    atrações
                                </p>

                            </div>

                        </div>

                                <Link
                                    to={`/cities/${city.id}`}
                                    className="
                                        mt-6
                                        text-green-600
                                        font-semibold
                                        flex
                                        items-center
                                        gap-2
                                        hover:gap-3
                                        duration-200
                                    "
                                >
                                    Explorar cidade

                                    <ArrowRight size={18} />
                                </Link>

                    </div>

                </div>

            ))}

        </div>
    );
}
    