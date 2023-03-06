import Pokeball from '../public/images/pokeball.png';
import Image from 'next/image';
import Card from '../components/card';

export async function getStaticProps() {
  const maxPokenon = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${api}?limit=${maxPokenon}`);
  const data = await response.json();
  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  
  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({pokemons}) {
  return (
    <>
      <div className='flex justify-center items-center  h-18 text-center m-8'>
        <h1 className='text-red-600 text-4xl font-bold'>POKE</h1>
        <h1 className='text-gray-700 text-4xl font-bold'>NEXT</h1>
        <Image src={Pokeball} width={45} height={45} className='ml-3 mt-1' />
      </div>
        <div className="flex justify-center items-center m-8">
          <ul className=' m-4 flex justify-around items-center w-full flex-wrap'>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />

            ))}
          </ul>
        </div>

    </>
  )
}

//parei na aula 22