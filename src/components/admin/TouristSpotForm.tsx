import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock3, MapPin, Mountain } from "lucide-react";

const touristSpotSchema = z.object({
  name: z.string().min(3, "Digite o nome do destino"),
  category: z.string().min(2, "Categoria obrigatória"),
  description: z.string().min(10, "Descrição muito curta"),

  zipCode: z.string().min(8, "CEP inválido"),
  state: z.string().min(2, "Estado obrigatório"),
  city: z.string().min(2, "Cidade obrigatória"),
  neighborhood: z.string().min(2, "Bairro obrigatório"),
  street: z.string().min(2, "Rua obrigatória"),
  number: z.string().min(1, "Número obrigatório"),

  openingHours: z.string().min(2, "Horário obrigatório"),
});

export type TouristSpotFormData = z.infer<typeof touristSpotSchema>;

type TouristSpotFormProps = {
  defaultValues?: TouristSpotFormData;
  onSubmit: (data: TouristSpotFormData) => Promise<void>;
  isEditing?: boolean;
};

export function TouristSpotForm({
  defaultValues,
  onSubmit,
  isEditing = false,
}: TouristSpotFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TouristSpotFormData>({
    resolver: zodResolver(touristSpotSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Mountain className="size-4 text-emerald-600" />

          <h3 className="text-sm font-semibold text-zinc-800">
            Informações do destino
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <input
              {...register("name")}
              placeholder="Nome do destino"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("category")}
              placeholder="Categoria"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <textarea
            {...register("description")}
            placeholder="Descrição do destino"
            className="min-h-24 w-full rounded-xl border border-zinc-200 p-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          />

          {errors.description && (
            <p className="mt-1 text-xs text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-emerald-600" />

          <h3 className="text-sm font-semibold text-zinc-800">Endereço</h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <input
              {...register("zipCode")}
              placeholder="CEP"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.zipCode && (
              <p className="mt-1 text-xs text-red-500">
                {errors.zipCode.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("state")}
              placeholder="Estado"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.state && (
              <p className="mt-1 text-xs text-red-500">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("city")}
              placeholder="Cidade"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.city && (
              <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("neighborhood")}
              placeholder="Bairro"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.neighborhood && (
              <p className="mt-1 text-xs text-red-500">
                {errors.neighborhood.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("street")}
              placeholder="Rua"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.street && (
              <p className="mt-1 text-xs text-red-500">
                {errors.street.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("number")}
              placeholder="Número"
              className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />

            {errors.number && (
              <p className="mt-1 text-xs text-red-500">
                {errors.number.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock3 className="size-4 text-emerald-600" />

          <h3 className="text-sm font-semibold text-zinc-800">Funcionamento</h3>
        </div>

        <div>
          <input
            {...register("openingHours")}
            placeholder="08:00 às 18:00"
            className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          />

          {errors.openingHours && (
            <p className="mt-1 text-xs text-red-500">
              {errors.openingHours.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-10 w-full rounded-xl bg-emerald-500 text-sm font-medium text-white transition hover:bg-emerald-600 disabled:opacity-50"
      >
        {isSubmitting
          ? "Salvando..."
          : isEditing
            ? "Salvar alterações"
            : "Criar destino"}
      </button>
    </form>
  );
}
