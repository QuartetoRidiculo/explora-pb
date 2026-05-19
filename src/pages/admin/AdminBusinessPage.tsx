import { Pencil, Plus, Trash2 } from "lucide-react";
import { restaurants } from "../../lib/mockData";

export default function AdminBusinessPage() {
  return (
    <div className="space-y-4 py-4 max-w-7xl mx-auto">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-500/90 cursor-pointer text-white px-4 py-2 rounded-xl">
          <Plus /> Novo Comércio
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full border-collaps">
          <thead className="bg-gray-200/50">
            {["Id", "Nome", "Cidade", "Avaliação", "Ações"].map((header) => (
              <th className="p-3 text-left uppercase font-medium text-gray-500">
                {header}
              </th>
            ))}
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-500">
                  {restaurant.id}
                </td>
                <td className="px-4 py-3 font-medium text-slate-900">
                  {restaurant.name}
                </td>
                <td className="px-4 py-3 font-medium text-slate-500">
                  {restaurant.rating}
                </td>

                <td className="px-4 py-3 text-slate-900 hidden md:table-cell">
                  {restaurant.city}
                </td>
                <td className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1 justify-start">
                    <button
                      // onClick={() => openEdit(restaurant)}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      // onClick={() => handleDelete(restaurant.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-red-500"
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
