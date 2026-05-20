import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, FileText, Landmark, Users } from "lucide-react";

const citySchema = z.object({
  name: z.string().min(2, "Digite o nome da cidade"),
  state: z.string().min(2, "Estado obrigatório"),
  population: z.string().min(1, "Informe a população"),
  description: z
    .string()
    .min(10, "A descrição precisa ter pelo menos 10 caracteres"),
});

export type CityFormData = z.infer<typeof citySchema>;

type CityFormProps = {
  defaultValues?: CityFormData;
  onSubmit: (data: CityFormData) => Promise<void>;
  isEditing?: boolean;
};

export function CityForm({
  defaultValues,
  onSubmit,
  isEditing = false,
}: CityFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CityFormData>({
    resolver: zodResolver(citySchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-sm text-zinc-500">
        Atualize as informações da cidade turística.
      </p>

      <div className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4">
        <div className="flex items-center gap-2">
          <Landmark className="size-4 text-emerald-600" />

          <h3 className="text-sm font-semibold text-zinc-800">
            Informações básicas
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
              <Building2 className="size-4 text-zinc-400" />

              <input
                {...register("name")}
                placeholder="Nome da cidade"
                className="h-10 w-full bg-transparent text-sm outline-none"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("state")}
              placeholder="Estado"
              className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.state && (
              <p className="mt-1 text-xs text-red-500">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
              <Users className="size-4 text-zinc-400" />

              <input
                {...register("population")}
                placeholder="População"
                className="h-10 w-full bg-transparent text-sm outline-none"
              />
            </div>

            {errors.population && (
              <p className="mt-1 text-xs text-red-500">
                {errors.population.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="size-4 text-emerald-600" />

          <h3 className="text-sm font-semibold text-zinc-800">Descrição</h3>
        </div>

        <div>
          <textarea
            {...register("description")}
            placeholder="Descreva a cidade, cultura, turismo e experiências..."
            className="min-h-28 w-full rounded-2xl border border-zinc-200 bg-white p-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          />

          {errors.description && (
            <p className="mt-1 text-xs text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-10 w-full rounded-xl bg-emerald-500 text-sm font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? "Salvando..."
          : isEditing
            ? "Salvar alterações"
            : "Criar cidade"}
      </button>
    </form>
  );
}
