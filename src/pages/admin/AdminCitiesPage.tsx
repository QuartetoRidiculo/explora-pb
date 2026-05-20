import { Pencil, Plus, Trash2 } from "lucide-react";
import { cities } from "../../lib/mockData";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { CityForm, type CityFormData } from "../../components/admin/CityForm";

export default function AdminCitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCity, setEditingCity] = useState<CityFormData | null>(null);

  function handleOpenCreateModal() {
    setEditingCity(null);
    setModalOpen(true);
  }

  function handleOpenEditModal(city: CityFormData) {
    setEditingCity(city);
    setModalOpen(true);
  }

  async function handleSubmit(data: CityFormData) {
    if (editingCity) {
      console.log("Atualizando cidade:", data);
    } else {
      console.log("Criando cidade:", data);
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
            Nova Cidade
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {cities.map((city) => (
            <div
              key={city.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white duration-150 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative h-28 overflow-hidden">
                <img
                  src={city.image}
                  className="h-full w-full object-cover duration-150 group-hover:scale-105"
                  alt={city.name}
                />
              </div>

              <div className="p-3">
                <h4 className="font-semibold text-slate-900">{city.name}</h4>

                <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                  {city.description}
                </p>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() =>
                      handleOpenEditModal({
                        name: city.name,
                        state: city.state,
                        population: city.population,
                        description: city.description,
                      })
                    }
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-1.5 text-xs text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    <Pencil className="h-3 w-3" />
                    Editar
                  </button>

                  <button className="rounded-lg border border-red-100 p-1.5 text-red-500 hover:bg-red-50 cursor-pointer">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingCity ? "Editar Cidade" : "Nova Cidade"}
      >
        <CityForm
          isEditing={!!editingCity}
          defaultValues={editingCity || undefined}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
}
