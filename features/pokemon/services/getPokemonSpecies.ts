import { api } from "./api"
import { Pokemon } from "../models/pokemon"

const getPokemonSpecies = async function (name: string): Promise<any> {
    const resp = await api.get(`/pokemon-species/${name}`)
    const { data } = resp
    
    return data
}

export { getPokemonSpecies }