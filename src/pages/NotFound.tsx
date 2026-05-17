import { Link } from "react-router-dom";

export default function NotFound({}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-playfair font-light text-gray-500/30">
              404
            </h1>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-playfair font-medium">
              Destino não encontrado
            </h2>
            <p className="text-gray-500 text-xl">
              Parece que esse caminho ainda não foi explorado. Que tal voltar
              para o início?
            </p>
          </div>

          <div className="pt-6">
            <Link to="/"
              className="inline-flex items-center px-6 py-3 font-semibold text-white bg-emerald-500 rounded-full hover:bg-emerald-500/90 transition-colors"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
