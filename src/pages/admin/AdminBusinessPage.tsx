import { Pencil, Plus, Trash2 } from "lucide-react";
import { restaurants } from "../../lib/mockData";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import {
  BusinessForm,
  type BusinessFormData,
} from "../../components/admin/BusinessForm";

export default function AdminBusinessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const [editingBusiness, setEditingBusiness] =
    useState<BusinessFormData | null>(null);

  function handleOpenCreateModal() {
    setEditingBusiness(null);
    setModalOpen(true);
  }

  function handleOpenEditModal(business: BusinessFormData) {
    setEditingBusiness(business);
    setModalOpen(true);
  }

  async function handleSubmit(data: BusinessFormData) {
    if (editingBusiness) {
      console.log("Atualizando comércio:", data);
    } else {
      console.log("Criando comércio:", data);
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
            Novo Comércio
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200/50">
              <tr>
                {["Id", "Nome", "Avaliação", "Cidade", "Ações"].map(
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

                  <td className="hidden px-4 py-3 text-slate-900 md:table-cell">
                    {restaurant.city}
                  </td>

                  <td className="px-4 py-3 text-left">
                    <div className="flex items-center justify-start gap-1">
                      <button
                        onClick={() =>
                          handleOpenEditModal({
                            name: restaurant.name,
                            category: restaurant.category,
                            description: restaurant.description,
                            city: restaurant.city,
                            state: restaurant.state,
                            zipCode: restaurant.zipCode,
                            neighborhood: restaurant.neighborhood,
                            street: restaurant.street,
                            number: restaurant.number,
                            phone: restaurant.phone,
                            instagram: restaurant.instagram,
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
        title={editingBusiness ? "Editar Comércio" : "Novo Comércio"}
      >
        <BusinessForm
          isEditing={!!editingBusiness}
          defaultValues={editingBusiness || undefined}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
}
