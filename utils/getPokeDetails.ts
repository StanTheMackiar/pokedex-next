import { pokeApi } from "../api"
import { Pokemon, PokemonDetailsReduced } from "../interfaces"

export const getPokeDetails = async (id: string):Promise<PokemonDetailsReduced> => {

    const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    
    return {
        name: pokemon.name,
        id: pokemon.id,
        sprites: {
            back_default: pokemon.sprites.back_default,
            back_shiny: pokemon.sprites.back_shiny,
            front_default: pokemon.sprites.front_default,
            front_shiny: pokemon.sprites.front_shiny,
            official: pokemon.sprites.other?.['official-artwork'].front_default!,
        }
    }
}
