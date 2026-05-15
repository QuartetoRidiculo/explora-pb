import { Compass, Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" bg-[linear-gradient(to_bottom_right,oklch(39.8%_0.07_227.392_/_0.6),oklch(39.8%_0.07_227.392_/_0.6)),url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80')] bg-cover bg-center p-16 flex flex-col justify-between">
        <Link to="/" className="flex items-center gap-2 w-min">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-white font-playfair">
            Explora<span className="uppercase text-emerald-500">pb</span>
          </h2>
        </Link>

        <div className="space-y-4">
          <h3 className="text-4xl font-bold text-white font-playfair">
            Sua próxima aventura
            <br /> começa aqui
          </h3>{" "}
          <p className="text-gray-200">
            Junte-se a milhares de exploradores descobrindo os
            <br /> tesouros escondidos da Paraíba.
          </p>
        </div>
        <p className="text-gray-200">© 2026 ExploraPB.</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <form className="space-y-6 w-full max-w-md">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-playfair">
              Bem-vindo de volta
            </h1>
            <p className="text-gray-500">Entre para continuar explorando</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 justify-center shadow-sm p-4 w-1/2 cursor-pointer hover:bg-emerald-500 hover:text-white font-semibold rounded-md">
              <FcGoogle size={25} />
              Google
            </button>
            <button className="flex items-center gap-2 justify-center shadow-sm p-4 w-1/2 cursor-pointer hover:bg-emerald-500 hover:text-white font-semibold rounded-md">
              <FaFacebook size={25} />
              Facebook
            </button>
          </div>
          <p className="text-gray-500 text-sm text-center">
            ou continue com email
          </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="shadow w-full pl-12 py-3 pr-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-gray-500" />
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="shadow w-full pl-12 py-3 pr-3 rounded-md"
              />
              {
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                >
                  {passwordVisible ? <Eye /> : <EyeClosed />}
                </button>
              }
            </div>
          </div>
          <p className="text-emerald-500 text-right cursor-pointer hover:underline">
            Esqueceu a senha?
          </p>
          <button className="bg-emerald-500 w-full p-4 text-white font-semibold rounded-md hover:bg-emerald-500/90 cursor-pointer">
            Entrar
          </button>
          <p className="text-gray-500 text-center">
            Não tem uma conta?{" "}
            <Link to="" className="text-emerald-500 hover:underline">
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
