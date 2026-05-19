import { Pencil, Plus, Trash2 } from "lucide-react";
import { destinations } from "../../lib/mockData";

export default function AdminDestinationPage() {
  return (
    <div className="space-y-4 py-4 max-w-7xl mx-auto">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-500/90 cursor-pointer text-white px-4 py-2 rounded-xl">
          <Plus /> Novo Ponto
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full border-collaps">
          <thead className="bg-gray-200/50">
            {["Nome", "Cidade", "Categoria", "Destaque", "Ações"].map(
              (header) => (
                <th className="p-3 text-left uppercase font-medium text-gray-500">
                  {header}
                </th>
              ),
            )}
          </thead>
          <tbody>
            {destinations.map((spot) => (
              <tr key={spot.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  {spot.name}
                </td>
                <td className="px-4 py-3 text-slate-500 hidden md:table-cell">
                  {spot.city}
                </td>
                <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">
                  {spot.category}
                </td>
                <td className="px-4 py-3">
                  <button
                    // onClick={() => toggleFeatured(spot.id)}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${spot.featured ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}
                  >
                    {spot.featured ? "Destaque" : "Normal"}
                  </button>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <button
                    //   onClick={() => openEdit(spot)}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                    //   onClick={() => handleDelete(spot.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
