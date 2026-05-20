import { Pencil, Plus, Trash2 } from "lucide-react";
import { destinations } from "../../lib/mockData";
import { useState } from "react";
import { TouristSpotForm } from "../../components/admin/TouristSpotForm";
import { Modal } from "../../components/Modal";
import type { TouristSpotFormData } from "../../components/admin/TouristSpotForm";

export default function AdminDestinationPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const [editingSpot, setEditingSpot] = useState<TouristSpotFormData | null>(
    null,
  );

  function handleOpenCreateModal() {
    setEditingSpot(null);
    setModalOpen(true);
  }

  function handleOpenEditModal(spot: TouristSpotFormData) {
    setEditingSpot(spot);
    setModalOpen(true);
  }

  async function handleSubmit(data: TouristSpotFormData) {
    if (editingSpot) {
      console.log("Atualizando ponto:", data);
    } else {
      console.log("Criando ponto:", data);
    }

    setModalOpen(false);
  }

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-4 py-4">
        <div className="flex justify-end">
          <button
            onClick={handleOpenCreateModal}
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-500/90 cursor-pointer"
          >
            <Plus />
            Novo Ponto
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200/50">
              <tr>
                {["Nome", "Cidade", "Categoria", "Status", "Ações"].map(
                  (header) => (
                    <th
                      key={header}
                      className="p-3 text-left text-xs font-medium uppercase text-gray-500"
                    >
                      {header}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {destinations.map((spot) => (
                <tr key={spot.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {spot.name}
                  </td>

                  <td className="hidden px-4 py-3 text-slate-500 md:table-cell">
                    {spot.city}
                  </td>

                  <td className="hidden px-4 py-3 text-slate-500 sm:table-cell">
                    {spot.category}
                  </td>

                  <td className="px-4 py-3">
                    <button
                      className={`cursor-pointer rounded-full px-2 py-0.5 text-xs font-medium ${
                        spot.featured
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {spot.featured ? "Em alta" : "Normal"}
                    </button>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() =>
                          handleOpenEditModal({
                            name: spot.name,
                            category: spot.category,
                            description: spot.description,
                            zipCode: spot.zipCode,
                            state: spot.state,
                            city: spot.city,
                            neighborhood: spot.neighborhood,
                            street: spot.street,
                            number: spot.number,
                            openingHours: spot.hours,
                          })
                        }
                        className="cursor-pointer rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>

                      <button className="cursor-pointer rounded-lg p-1.5 text-red-500 hover:bg-red-50">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingSpot ? "Editar Ponto" : "Novo Ponto"}
      >
        <TouristSpotForm
          isEditing={!!editingSpot}
          defaultValues={editingSpot || undefined}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
}
