import { Pencil, Plus, Trash2 } from "lucide-react";
import { destinations } from "../../lib/mockData";

export default function AdminCitiesPage() {
  return (
    <div className="space-y-4 py-4 max-w-7xl mx-auto">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-500/90 cursor-pointer text-white px-4 py-2 rounded-xl">
          <Plus /> Nova Cidade
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {destinations.map((city) => (
          <div
            key={city.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
          >
            <div className="h-28 relative">
              <img
                src={city.image}
                className="w-full h-full object-cover"
                alt={city.name}
              />
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-slate-900">{city.name}</h4>
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                {city.description}
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  //   onClick={() => openEdit(city)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-600 hover:bg-slate-50"
                >
                  <Pencil className="w-3 h-3" /> Editar
                </button>

                <button
                  //   onClick={() => handleDelete(city.id)}
                  className="p-1.5 border border-red-100 rounded-lg text-red-500 hover:bg-red-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
