import Image from "next/image";

export const getStaticPaths = async() => {
    const maxPokenon = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(`${api}?limit=${maxPokenon}`);
    const data = await response.json();
    
    //params
    const paths = data.results.map((pokemon, index) => {return {params: {pokemonId: (index + 1).toString()}}})

    return { paths, fallback: false,}
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props: {pokemon: data}
    }
}

const classTypes = {
        'bug':'m-2 p-2 bg-bug rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'dark': 'm-2 p-2 bg-dark rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'dragon': 'm-2 p-2 bg-dragon rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'electric': 'm-2 p-2 bg-electric rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'fairy': 'm-2 p-2 bg-fairy rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'fighting': 'm-2 p-2 bg-fighting rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'fire': 'm-2 p-2 bg-fire rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'flying': 'm-2 p-2 bg-flying rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'ghost': 'm-2 p-2 bg-ghost rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'grass':  'm-2 p-2 bg-grass rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'ground': 'm-2 p-2 bg-ground rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'ice': 'm-2 p-2 bg-ice rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'normal': 'm-2 p-2 bg-normal rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'poison': 'm-2 p-2 bg-poison rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'psychic': 'm-2 p-2 bg-psychic rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'rock': 'm-2 p-2 bg-rock rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'steel': 'm-2 p-2 bg-steel rounded text-center text-zinc-800 capitalize text-lg font-bold',
        'water': 'm-2 p-2 bg-water rounded text-center text-zinc-800 capitalize text-lg font-bold',
}


const Pokemon = ({pokemon}) => {
    
    return (
        <div className="mx-auto h-screen flex flex-col p-2 justify-around items-center">
            <h1 className="bg-zinc-800 w-2/6 h-[10%] flex justify-center
             items-center text-white capitalize font-bold text-3xl mb-4 mt-12">{pokemon.name}</h1>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                width={225} height={225} alt={pokemon.name} className='border-b border-gray-300 mb-4 ' />
            <div className="flex flex-col justify-center items-center m-2">
                <h3 className="font-bold text-lg">Número:</h3>
                <p className="text-lg">#{ pokemon.id}</p>
            </div>
            <div className="flex  flex-col justify-around items-center border-b w-1/6 border-gray-300 m-2 p-2">
                <h3 className="font-bold text-lg mb-2">Tipo:</h3>
                <div className="text-lg flex flex-row justify-around items-center mb-1">
                    {pokemon.types.map((item, index) => (
                        <span key={index}
                            className={classTypes[item.type.name]}>
                            {item.type.name}</span>
                        
                    ))}
                </div>
            </div>
            <div className="flex justify-around items-center w-1/6 mb-12">
                <div>
                    <h4 className='font-bold text-lg'>Altura:</h4>
                    <p className="text-lg">{ pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg">peso:</h4>
                    <p className="text-lg">{ pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )

}

export default Pokemon; 