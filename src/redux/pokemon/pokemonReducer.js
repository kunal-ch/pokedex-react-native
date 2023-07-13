import { SELECTED_POKEMON, SET_POKEMON_LIST } from "./pokemonActionTypes";

const initialState = {
    pokemonList: [

    ],
    selectedPokemon: {

    }
}
export const pokemonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_POKEMON_LIST:

            return {
                // ...state, pokemonList: [...payload]
                ...state, pokemonList: [...state.pokemonList, ...payload]
            };

        case SELECTED_POKEMON:

            return {
                ...state, selectedPokemon: payload
            }
        default:
            return state;
    }
}