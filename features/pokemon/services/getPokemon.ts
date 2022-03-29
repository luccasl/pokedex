import { api } from "./api"
import { Pokemon } from "../models/pokemon"

const getPokemon = async function (name: string): Promise<any> {
    const resp = await api.get(`/pokemon/${encodeURI(name)}`)
    const { data } = resp
    
    return data
}

export { getPokemon }