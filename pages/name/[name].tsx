import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { pokeApi } from '../../api';

import { PokemonDetails } from '../../components/pokemon';

import { PokemonDetailsReduced, PokemonListResponse } from '../../interfaces';
import { getPokeDetails } from '../../utils';

interface Props {
    pokemon: PokemonDetailsReduced
}

const PokemonPageByName: FC<Props> = ({pokemon}) => {
  return (
    <PokemonDetails pokemon={pokemon} />
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { data: {results} } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')


    return {
        paths: results.map((poke) => ({
            params: {
                name: poke.name
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { name } = params as {name: string}
  
    return {
      props: {
        pokemon: await getPokeDetails(name)
      }
    }
  }

export default PokemonPageByName