import { useEffect, useState } from "react"
import { Pokemon } from "../models/pokemon"
import { getPokemon } from "../services/getPokemon"
import { getPokemonSpecies } from "../services/getPokemonSpecies"

const useGetAdditionalPokemonsInfo = function(pokemons: any[]) {
    const [pokemonsWithAdditionalInfo, setPokemonsWithAdditionalInfo] = useState<Pokemon[]>([])

    useEffect(() => {
        if (pokemons.length > 0) {
            fetchAdditionalPokemonsInfo()
        }
    }, [ pokemons ])

    const fetchAdditionalPokemonsInfo = async () => {
        const pokemonRequests = pokemons.map(({ name }: { name: string }) => {
            return new Promise<any>(async (resolve) => {
                const pokemon = await getPokemon(name)
      
                const pokemonSpecies = await getPokemonSpecies(pokemon.species.name)
      
                let pokemonImage: string = ''
                let missingArtwork: boolean = false
                if (pokemon.sprites.other['official-artwork'].front_default === null) {
                  const speciesPokemon = await getPokemon(pokemon.species.name)
                  pokemonImage = speciesPokemon.sprites.other['official-artwork'].front_default
                  missingArtwork = true
                } else {
                  pokemonImage = pokemon.sprites.other['official-artwork'].front_default
                }
      
                resolve({
                    name: pokemon.name,
                    color: pokemonSpecies.color.name,
                    image: pokemonImage,
                    missingArtwork
                })
            })
          })
      
          Promise.all(pokemonRequests).then(responses =>
            setPokemonsWithAdditionalInfo(responses)
          )
    }

    return [ pokemonsWithAdditionalInfo ]
}

export { useGetAdditionalPokemonsInfo }