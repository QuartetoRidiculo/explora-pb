import { Heart, MapPin, Settings, Star } from 'lucide-react';



export default function Profile() {
  return (
    <>
      <div className='bg-slate-50'  >
        <div className='flex justify-between'>
         <h1>Lucas Andrae</h1>
          <Settings />
          <button>Editar parfil</button>
        </div>

        <div>
          <div>
            <MapPin />
            <h2>23</h2>
            <h2>Locais visitddddddsaddasdsadados</h2>
          </div>

          <div>
            <Heart />
            <h2>4</h2>
            <h2>Favoritos</h2>
          </div>

          <div>
            <Star />
            <h2>8</h2>
            <h2>Avaliações</h2>
          </div>

        </div>
        <div>
          <button>
            <Heart />
            <h2>4</h2>
            <h2>Favoritos</h2>
          </button>

          <button>
            <Star />
            <h2>8</h2>
            <h2>Avaliações</h2>
          </button>
        </div>





      </div>


    </>)
}