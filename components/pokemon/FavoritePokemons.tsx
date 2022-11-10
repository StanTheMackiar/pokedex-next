import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from '.'


export const FavoritePokemons = ({pokemons}: {pokemons: number[]}) => {


  return (
    
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      pokemons.map( id => (
        <FavoriteCardPokemon key={id} id={id} />
      ))
    }
  </Grid.Container>
  )
}
