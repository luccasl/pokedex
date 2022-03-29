import { FC, } from "react";

const PokemonCardGrid: FC<{
    pokemons: any[],
    renderCard: (key:number, pokemon: any) => JSX.Element
}> = ({
    pokemons,
    renderCard,
}) => {
    return (
        <div className='grid grid-cols-2 gap-4 h-full w-full p-6 sm:grid-cols-3 md:grid-cols-4'>
            { pokemons.map((pokemon: any, key: number) =>
                renderCard(key, pokemon) )}
        </div>
    )
}

export { PokemonCardGrid }