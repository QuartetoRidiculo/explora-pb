import{useState} from "react";
import { Search } from 'lucide-react';
import CitiesCards from "./CitiesCards";

export default function Cities(){

    const [name, setName] = useState("");

    return(
     <div className="">
        <div className="flex flex-col justify-center items-center bg-teal-100 pt-4 pb-12">
            <p className="bg-green-200 rounded-full p-1 text-green-600">Destinos</p>

            <h1 className="font-bold text-4xl pb-2">Cidades da Paraíba</h1>
            <p className="text-gray-500 pb-4">Escolha uma cidade e descubra tudo que ela tem a oferecer.</p>
            <div className="relative">

                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2
                text-gray-500"/>

                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome da cidade..." className="w-96 h-10 rounded-full pl-10 outline-1
                 outline-gray-200 bg-white"></input>
            </div>

        </div>

        <div>
            <CitiesCards name={name} />
        </div>
        
    </div>
    );
}