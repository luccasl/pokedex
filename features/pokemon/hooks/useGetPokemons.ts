import { useEffect, useState } from "react"
import { getPokemons } from "../services/getPokemons"

const useGetPokemons = function() {
    const [ pokemons, setPokemons ] = useState<any[]>([])

    async function fetchPokemons(): Promise<void> {
        const pokemons = await getPokemons()

        const { results } = pokemons

        setPokemons(results)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return [ pokemons, ]
}

export { useGetPokemons }