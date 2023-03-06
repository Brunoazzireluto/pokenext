import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }) => {
    return (
        <div className='m-4 rounded-xl shadow-lg shadow-red-600 
                        bg-zinc-800 border border-red-700 w-2/12 flex flex-col
                        justify-around items-center p-1 pb-4'>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                width={120} height={120} alt={pokemon.name} />
            <p className="border border-white bg-red-600
                        text-white w-1/4 text-center rounded mt-4">#{pokemon.id}</p>
            <h3 className="text-white font-bold text-xl m-4">{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className='bg-white p-1.5 font-bold text-base 
            rounded bg-opacity-70 border border-red-700 hover:bg-white hover:bg-opacity-100 transition-all'>
                Detalhes
            </Link>

        </div>
    )
}

export default Card;