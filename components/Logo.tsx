import { MdCatchingPokemon } from "react-icons/md"

const Logo = () => {
    return (
        <div className='flex items-center h-full ml-6'>
            <MdCatchingPokemon className='text-white mr-1' />
            <div className='text-white font-Montserrat text-lg'>
                PokeDex
            </div>
        </div>
    )
}

export { Logo }