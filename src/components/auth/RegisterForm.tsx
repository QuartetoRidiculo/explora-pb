import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth.schema";

type Props = {
  onSwitch: () => void;
};

export default function RegisterForm({ onSwitch }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-playfair">Criar conta</h1>

        <p className="text-gray-500">Crie sua conta para explorar a Paraíba</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Nome</label>

        <div className="relative">
          <User className="absolute top-3 left-3 text-gray-500" />

          <input
            type="text"
            placeholder="Seu nome"
            className="shadow w-full pl-12 py-3 pr-3 rounded-md"
            {...register("name")}
          />
        </div>

        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>

        <div className="relative">
          <Mail className="absolute top-3 left-3 text-gray-500" />

          <input
            type="email"
            placeholder="seu@email.com"
            className="shadow w-full pl-12 py-3 pr-3 rounded-md"
            {...register("email")}
          />
        </div>

        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Senha</label>

        <div className="relative">
          <Lock className="absolute top-3 left-3 text-gray-500" />

          <input
            type={passwordVisible ? "text" : "password"}
            className="shadow w-full pl-12 py-3 pr-12 rounded-md"
            placeholder="••••••••"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute top-3 right-3 text-gray-500"
          >
            {passwordVisible ? <Eye /> : <EyeClosed />}
          </button>
        </div>

        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Confirmar senha</label>

        <div className="relative">
          <Lock className="absolute top-3 left-3 text-gray-500" />

          <input
            type={confirmPasswordVisible ? "text" : "password"}
            className="shadow w-full pl-12 py-3 pr-12 rounded-md"
            placeholder="••••••••"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="absolute top-3 right-3 text-gray-500"
          >
            {confirmPasswordVisible ? <Eye /> : <EyeClosed />}
          </button>
        </div>

        {errors.confirmPassword && (
          <span className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button className="bg-emerald-500 w-full p-4 text-white font-semibold rounded-md hover:bg-emerald-500/90 cursor-pointer">
        Criar conta
      </button>

      <p className="text-gray-500 text-center">
        Já possui conta?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-emerald-500 hover:underline"
        >
          Entrar
        </button>
      </p>
    </form>
  );
}
