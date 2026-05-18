import { MapPin, ArrowRight } from "lucide-react";
import areiaCard from "../../assets/cities/cards/areiacard.webp";

export default function CitiesCards({ name }){

    const citiesList = [
        {
            id: 1,
            cityName: "Areia",
            population: "23 Mil habitantes",
            description: "Areia é uma cidade histórica localizada no Brejo Paraibano, famosa pelo clima agradável, arquitetura colonial e rica cultura. O município também se destaca pela produção de cachaça artesanal e pelo turismo histórico e gastronômico.",
            visitants: "20K",
            satisfaction: "96%",
            attractions: 30,
            cityImg: areiaCard
        },
        {
            id: 2,
            cityName: "Cabaceiras",
            population: "23 Mil habitantes",
            description: "Areia é uma cidade histórica localizada no Brejo Paraibano, famosa pelo clima agradável, arquitetura colonial e rica cultura. O município também se destaca pela produção de cachaça artesanal e pelo turismo histórico e gastronômico.",
            visitants: "20K",
            satisfaction: "96%",
            attractions: 30,
            cityImg: "../assets/cities/cards/areiacard.webp"
        },
    ]

    const filteredCities = citiesList.filter((city) =>
    city.cityName.toLowerCase().includes(name.toLowerCase())
);

    return (
        <div className="flex flex-wrap gap-6 mt-8 ml-4 mb-8">
            {filteredCities.map((city) => (
                <div
                    key={city.id}
                    className="w-[350px] bg-white rounded-3xl shadow-md overflow-hidden"
                >

                    <div className="relative">
                        <img
                            src={city.cityImg}
                            alt={city.cityName}
                            className="w-full h-[210px] object-cover"
                        />

                        <div className="absolute bottom-5 left-5 text-white">
                            <h1 className="text-3xl font-bold">
                                {city.cityName}
                            </h1>

                            <div className="flex items-center gap-1 text-sm">
                                <MapPin size={16} />
                                <span>{city.population}</span>
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
                                    {city.visitants}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    visitantes
                                </p>
                            </div>

                            <div>
                                <h2 className="font-bold text-2xl">
                                    {city.satisfaction}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    satisfação
                                </p>
                            </div>

                            <div>
                                <h2 className="font-bold text-2xl">
                                    {city.attractions}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    atrações
                                </p>
                            </div>
                        </div>

                        <button
                            className="
                                mt-6
                                text-green-600
                                font-semibold
                                flex
                                items-center
                                gap-2
                            "
                        >
                            Explorar cidade
                            <ArrowRight size={18} />
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
}