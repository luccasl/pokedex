import { api } from "./api"
import { Pokemon } from "../models/pokemon"

const getPokemons =
async function (): Promise<any> {
    const resp = await api.get(`/pokemon?limit=2000`)
    const { data } = resp
    
    return data
}

export { getPokemons }