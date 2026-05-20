import { Plus, Trash2 } from "lucide-react";
import { categories } from "../../lib/mockData";
// import { useState } from "react";

export default function AdminCategoriesPage() {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto py-4 space-y-4">
        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-500/90 cursor-pointer text-white px-4 py-2 rounded-xl">
            <Plus /> Nova Categoria
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 hover:scale-105"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 text-sm truncate">
                  {cat.name}
                </p>
              </div>

              <button
                // onClick={() => handleDelete(cat.id)}
                className="p-1 rounded hover:bg-red-50 text-red-400 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Editar Categoria"
      >
      </Modal> */}
    </>
  );
}
