import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { redirect } from 'next/dist/server/api-utils';

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
        // fallback: false
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { id } = params as {id: string}

    const pokemon = await getPokeDetails(id)

    if ( !pokemon ) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400,
    }
  }


export default PokemonPage




