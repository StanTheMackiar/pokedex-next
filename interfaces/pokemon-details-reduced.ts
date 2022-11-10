export interface PokemonDetailsReduced {
    name: string,
    id: number,
    sprites: Sprites

}

interface Sprites {
    official: string,
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string,
}