import { FC, Props } from "react";

const PokemonCard: FC<{
    id: number,
    name: string,
    color: string,
    imageUrl: string,
    missingArtwork: boolean }> = ({
    id,
    name,
    color,
    imageUrl,
    missingArtwork,
}) => {
    let transformedColor = color

    if (color === 'white') {
      transformedColor = 'gray'
    }

    if (color == 'black') {
      transformedColor = 'slate'
    }

    return <div key={ id } className={`animate-fadeIn flex flex-col bg-gradient-to-tr from-${transformedColor}-500 to-${transformedColor}-500/50 shadow-md rounded-md aspect-square w-full pt-2 hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer`}>
      <div className='flex-1 h-20'>
        <img
          className={`h-full w-full object-contain ${missingArtwork && 'brightness-0'}`}
          src={ imageUrl }
          alt={ name } />
      </div>
      <div className='flex justify-center pb-2 pt-2 text-white font-Montserrat'>
        { name }
      </div>
    </div>
}

export { PokemonCard }