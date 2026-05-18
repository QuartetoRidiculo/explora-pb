import DestinationCard from "../components/DestinationCard";
import { destinations } from "../lib/mockData";

export default function Favorite() {
  return (
    <div className="py-16 space-y-8 mx-32">
      <div>
        <h1 className="text-5xl font-playfair font-bold">Favoritos</h1>
        <p className="text-gray-500 mt-2">
          {destinations.length} destinos salvos
        </p>
      </div>
      <div>
        <h2 className="text-xl font-playfair font-semibold mb-6">
          Todos os favoritos
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <DestinationCard key={i} destination={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
