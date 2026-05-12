import { Heart, MapPin, Settings, Star } from "lucide-react";
import Card from "../components/Card";

export default function Profile() {
  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className=" h-20 w-20 bg-emerald-500 rounded-full"></div>
            <div>
              <h1 className="text-xl font-bold ">Lucas Andrae</h1>
            </div>
          </div>
          <div className="flex shadow-md px-2 rounded-2xl items-center hover:bg-white">
            <Settings className="text-emerald-500"/>
            <button className="px-4 py-1 w-35 cursor-pointer ">
              Editar perfil
            </button>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex  w-50 h-30 bg-white flex-col items-center gap-3 shadow-md p-4 rounded-xl">
            <MapPin className="text-emerald-500"/>
            <h2>23</h2>
            <p>Locais visitados</p>
          </div>

          <div className="flex w-50 h-30  bg-white flex-col items-center gap-3 shadow-md p-4 rounded-xl">
            <Heart className="text-emerald-500"/>
            <h2>4</h2>
            <p>Favoritos</p>
          </div>

          <div className="flex w-50 h-30  bg-white flex-col items-center gap-3 shadow-md p-4 rounded-xl">
            <Star className="text-emerald-500"/>
            <h2>8</h2>
            <h2>Avaliações</h2>
          </div>
        </div>

        <div className="flex w-min p-2 mt-8 gap-4 shadow bg-gray-100 rounded-xl items-center">
          <div className="flex items-center gap-4 p-2 w-45 h-8 rounded-xl cursor-pointer hover:bg-white">
            <Heart />
            <h2>Favoritos</h2>
          </div>

          <div className="flex items-center gap-4 p-2 w-45  h-8 rounded-xl cursor-pointer hover:bg-white">
            <Star />
            <h2>Avaliações</h2>
          </div>
        </div>

        <div className="flex gap-4 pt-8">
          <Card
            props={{
              href: "/local/1",
              rating: 4.8,
              title: "Praia de Tambaba",
              location: "Conde - PB",
              imgUrl:
                "https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2023/01/BAIA-DA-TRAICAO.png",
              qtdReviews: 120,
            }}
          />

          <Card
            props={{
              href: "/local/2",
              rating: 4.5,
              title: "Lajedo de Pai Mateus",
              location: "Cabaceiras - PB",
              imgUrl:
                "https://files.clickpb.com.br/wp-content/uploads/2023/12/31134503/lajedo-de-pai-mateus.jpg",
              qtdReviews: 87,
            }}
          />

          <Card
            props={{
              href: "/local/3",
              rating: 4.3,
              title: "Parque do Povo",
              location: " Campina Grande - PB",
              imgUrl:
                "https://www.segueviagem.com.br/wp-content/uploads/2022/03/Parque-do-Povo-Campina-Grande-Paraiba-Credito-editorial-Cacio-Murilo-shutterstock_1954331074.jpg",
              qtdReviews: 120,
            }}
          />
          <Card
            props={{
              href: "/local/4",
              rating: 3.9,
              title: "Parque Estadual Pedra da Boca",
              location: "Araruna - PB",
              imgUrl:
                "https://uploads.clickpb.com.br/clicktur/wp-content/uploads/2025/04/DSC8308-1200x800.jpg",
              qtdReviews: 60,
            }}
          />
        </div>
      </div>
    </>
  );
}
