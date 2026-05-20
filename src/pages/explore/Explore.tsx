import { Search } from "lucide-react";
import DestinationCard from "../../components/DestinationCard";
import { useState } from "react";
import { destinations } from "../../lib/mockData";


// const cards = [
//   {
//     id: "conde",
//     href: "/explore",
//     rating: 4.9,
//     name: "Praia do Coqueirinho",
//     city: "Conde",
//     image: "https://imgs.search.brave.com/cPvqaaMZ1zfqJRQehknJrOZHMDHJ4w85fTLjtX_ZD84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/ZGV2aWFnZW5zLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNC9NaXJh/bnRlLWFjaW1hLWRh/LXByYWlhLWRlLUNv/cXVlaXJpbmhvLVBC/LmpwZw",
//     reviews: 438,
//   },
//   {
//     id: "fagundes",
//     href: "/explore",
//     rating: 4.5,
//     name: "Pedra de Santo Antônio",
//     city: "Fagundes",
//     image: "https://imgs.search.brave.com/RGEdTJtaCIZYFCyziljWls8HBAV4o4c3amcJDA2B6Gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMDMu/dmlkZW8uZ2xiaW1n/LmNvbS94MjE2LzU5/MzQ2NjIuanBn",
//     reviews: 187,
//   },
//   {
//     id: "inga",
//     href: "/explore",
//     rating: 4.8,
//     name: "Pedra do Ingá",
//     city: "Ingá",
//     image: "https://imgs.search.brave.com/8eC0GdUPPvRvqQMmE7SXgkW5Zgsuh97KnUpyXspN0Mg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTQvNWQvNDQvZjcv/cGVkcmEtZGUtaW5n/YS5qcGc",
//     reviews: 521,
//   },
//   {
//     id: "cabaceiras",
//     href: "/explore",
//     rating: 4.9,
//     name: "Lajedo de Pai Mateus",
//     city: "Cabaceiras",
//     image: "https://imgs.search.brave.com/0ef-Pnavz5w0UK9K0lB9aYb9Jht7JUuAmQEag81cbiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/NjQ0MDE0L3B0L2Zv/dG8vbGFuZHNjYXBl/cy1vZi1wYXJhaWJh/LXBhaS1tYXRldXMt/bGFqZWRvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05QndK/X080RzFyc3BGQzV2/Wm05SzNyeG9MdVZp/YmtDcVV1ZlQzNkVo/RXlVPQ",
//     reviews: 674,
//   },
//   {
//     id: "lucena",
//     href: "/explore",
//     rating: 4.4,
//     name: "Ruínas de Nossa Senhora do Bom Sucesso",
//     city: "Lucena",
//     image: "https://imgs.search.brave.com/Xp9NM0dX-x3rh8cL9bzSajMi7FCWFtyG0xO0S13ADOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXJh/aWJhY3JpYXRpdmEu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA1L0ln/cmVqYS1Ob3NzYS1T/ZW5ob3JhLWRlLUJv/bnN1Y2Vzc28tUnUl/QzMlQURuYXMzLmpw/Zw",
//     reviews: 143,
//   },
//   {
//     id: "bananeiras",
//     href: "/explore",
//     rating: 4.6,
//     name: "Cachoeira do Roncador",
//     city: "Bananeiras",
//     image: "https://imgs.search.brave.com/PORyYFG1er_Vfrpd-g8LB-zgwkqzk0f05bOkHZS1W9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/bzYyMHg0MDAubW5z/dGF0aWMuY29tLzIz/NTE0OTlmYzkzYjEy/NzdiNTc5OTA4MGZk/NDNjOWNlL2NhY2hv/ZWlyYS1kby1yb25j/YWRvci5qcGc",
//     reviews: 259,
//   },
//   {
//     id: "araruna",
//     href: "/explore",
//     rating: 4.7,
//     name: "Pedra da Boca",
//     city: "Araruna",
//     image: "https://imgs.search.brave.com/AFGXIh4y0WN4RXvC3LvNiVUrET8Yj7Mj7Urb7239YdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXJhcnVuYS5wYi5n/b3YuYnIvc291cmNl/L1RVUklTTU8vYXJh/cnVuYSUyMGJvY2El/MjBkYSUyMHBlZHJh/LmpwZz8xNTAwNjkx/NTQ5Nzk5",
//     reviews: 311,
//   },
//   {
//     id: "sousa",
//     href: "/explore",
//     rating: 4.8,
//     name: "Vale dos Dinossauros",
//     city: "Sousa",
//     image: "https://imgs.search.brave.com/67DmKDL6kkk2Zzc7H9ukulcNMWXv87g9C6SIe0p699Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFn/ZW1ldHVyaXNtby5h/YnJpbC5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDcvdmFsZS1kaW5v/c3NhdXJvcy1zb3Vz/YS5qcGc_cXVhbGl0/eT03MCZzdHJpcD1p/bmZvJnc9MTI4MCZo/PTcyMCZjcm9wPTE",
//     reviews: 487,
//   },
//   {
//     id: "matureia",
//     href: "/explore",
//     rating: 4.9,
//     name: "Pico do Jabre",
//     city: "Matureia",
//     image: "https://imgs.search.brave.com/1tQUCuCr7yY2gW3JGwHRNNq7OgV0FhW0wSqHMXkou0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5jbGlja3BiLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNS8xNjE4/MjMwMy9waWNvLWRv/LWphYnJlLmpwZWc",
//     reviews: 396,
//   },
//   {
//     id: "malta",
//     href: "/explore",
//     rating: 4.9,
//     name: " Santuário de Deus Pai",
//     city: "Malta",
//     image: "https://imgs.search.brave.com/vBGNuwQ3sj-cmLjtSTPz8XZanT3rVpDygRiBVP89pG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNpZGlnaXRhbC5j/b20vaW1hZ2VzL2Rl/c2lnbi1zZW0tbm9t/ZS0yMDI1LTEwLTI5/dDE1NDAxOS43MTYt/NjkwMjZiMjg5YTVj/Yi5qcGc_dz02ODAm/aD0zNzg",
//     reviews: 396,
//   }
// ];

export default function Explore() {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (<>
    <div className="px-32 py-16"
    >
      <div className="p-6 rounded-2xl flex flex-col gap-2 font-playfair font-bold">
        <h1 className="text-4xl">
          Explorar Destinos
        </h1>

        <p className="text-gray-500">
          8 destinos encontrados
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="relative flex-1 border rounded-xl border-gray-300 shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-gray-300">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />

          <input
            className="w-full pl-10 p-2.5 rounded-xl text-gray-800"
            type="text"
            placeholder="Cidades, trilhas, praias..."
          />
        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className={`
              border border-gray-300 px-5 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
              ${mostrarFiltros
                ? " text-white bg-emerald-500"
                : "bg-white text-gray-700"}
            `}
          >
            Filtros
          </button>

          <select
            className="
              border border-gray-300 px-5 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <option>Mais procurados</option>
            <option>Mais popular</option>
            <option>A-Z</option>
          </select>

        </div>
      </div>

      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${mostrarFiltros
            ? "max-h-96 opacity-100 mt-6"
            : "max-h-0 opacity-0"}
        `}
      >
        <div className="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm">

          <h2 className="text-xl font-semibold mb-5">
            Categorias
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "Praias",
              "Cultura",
              "Gastronomia",
              "Aventura",
              "Ecoturismo",
              "Trilhas",
              "Histórico"
            ].map((categoria) => (
              <button
                key={categoria}
                className="bg-gray-100
                hover:bg-emerald-600
                hover:text-white
                  px-4 py-2
                  rounded-xl
                  text-m font-medium
                  transition-all duration-300
                  hover:-translate-y-0.5"
              >
                {categoria}
              </button>
            ))}

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {destinations.map((card) => (
          <DestinationCard
            key={card.id}
            destination={card as any}
          />
        ))}
      </div>

    </div>
  </>
  );
}
