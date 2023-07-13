import { SET_POKEMON_LIST, SELECTED_POKEMON, DELETE_POKEMON_LIST } from "./pokemonActionTypes";
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

export const deletePokemonList = (pokemonList) => {
    return {
        type: DELETE_POKEMON_LIST,
        payload: pokemonList
    }
}