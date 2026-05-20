import { Compass } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

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
          </h3>

          <p className="text-gray-200">
            Junte-se a milhares de exploradores descobrindo os
            <br /> tesouros escondidos da Paraíba.
          </p>
        </div>

        <p className="text-gray-200">© 2026 ExploraPB.</p>
      </div>

      <div className="flex items-center justify-center px-4 py-12">
        {isRegister ? (
          <RegisterForm
            onSwitch={() => setIsRegister(false)}
          />
        ) : (
          <LoginForm
            onSwitch={() => setIsRegister(true)}
          />
        )}
      </div>
    </div>
  );
}