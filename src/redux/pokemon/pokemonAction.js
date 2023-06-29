import { SET_POKEMON_LIST, SELECTED_POKEMON } from "./pokemonActionTypes";
export const setPokemonList = (pokemonList) => {
    return {
        type: SET_POKEMON_LIST,
        payload: pokemonList
    }
}

export const selectedPokemon = (pokemonItem) => {
    return {
        type: SELECTED_POKEMON,
        payload: pokemonItem
    }
}