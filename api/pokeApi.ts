import axios from 'axios'
import { Pokemon } from '../interfaces';
import { PokemonDetailsReduced } from '../interfaces/pokemon-details-reduced';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})


export default pokeApi;