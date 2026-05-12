import { Heart, MapPin, Settings, Star } from 'lucide-react';



export default function Profile() {
  return (
    <>
      <div className='m-6'>

        <div className='flex items-center justify-between w-full'>

          <h1 className='text-xl'>Lucas Andrae</h1>

          <div className='flex border rounded-2xl items-center'>

            <Settings />
            <button className='px-4 py-1 cursor-pointer'>Editar perfil</button>
          </div>

        </div>
        <div className='flex gap-4'>
          <div className='flex  w-40 h-30  flex-col items-center gap-3 border p-4 rounded-xl'>
            <MapPin />
            <h2>23</h2>
            <p>Locais visitados</p>
          </div>

          <div className='flex w-40 h-30 flex-col items-center gap-3 border p-4 rounded-xl'>
            <Heart />
            <h2>4</h2>
            <h2>Favoritos</h2>
          </div>

          <div className='flex w-40 h-30 flex-col items-center gap-3 border p-4 rounded-xl'>
            <Star />
            <h2>8</h2>
            <h2>Avaliações</h2>
          </div>

        </div>

        <div className='flex p-4 w-full h-10 mt-8 gap-4 shadow bg-gray-200 rounded-xl items-center'>
          <div className='flex items-center shadow bg-white w-40  h-8 rounded-xl cursor-pointer'>
            <Heart />
            <h2>Favoritos</h2>
          </div>

          <div className='flex items-center shadow bg-white w-40  h-8 rounded-xl cursor-pointer'>
            <Star />
            <h2>Avaliações</h2>
          </div>

        </div>

      </div>


    </>)
}