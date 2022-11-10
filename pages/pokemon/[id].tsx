import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { pokeApi } from '../../api';
import { PokemonDetails } from '../../components/pokemon';
import { PokemonListResponse, PokemonDetailsReduced } from '../../interfaces';
import { getPokeDetails } from '../../utils';



interface Props {
    pokemon: PokemonDetailsReduced
}

export const PokemonPage: NextPage<Props> = ({pokemon}) => (
    <PokemonDetails pokemon={pokemon} />
)



export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { data: {results} } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

    return {
        paths: results.map((poke, index) => ({
            params: { id: `${ index + 1 }` }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { id } = params as {id: string}

    const pokemon = await getPokeDetails(id)
  

    return {
      props: {
        pokemon,
      }
    }
  }


export default PokemonPage




