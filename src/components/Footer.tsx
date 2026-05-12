import { Link } from "react-router-dom";
import {
  Compass,
  MapPin,
} from "lucide-react";

const footerLinks = {
  Explorar: [
    { label: "Destinos", path: "/explore" },
    { label: "Cidades", path: "/cities" },
  ],
  Empresa: [
    { label: "Sobre nós", path: "#" },
    { label: "Blog", path: "#" },
    { label: "Parceiros", path: "#" },
    { label: "Contato", path: "#" },
  ],
  Suporte: [
    { label: "Central de ajuda", path: "#" },
    { label: "Termos de uso", path: "#" },
    { label: "Privacidade", path: "#" },
    { label: "Acessibilidade", path: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="text-white/80 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Explora
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Descubra os tesouros escondidos da Paraíba. Uma plataforma que
              conecta viajantes às experiências mais autênticas do estado mais
              acolhedor do Brasil.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 font-body">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2026 Explora.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <MapPin className="w-3 h-3" />
            <span>Campina Grande, PB - Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
