import { DELETE_POKEMON_LIST, SELECTED_POKEMON, SET_POKEMON_LIST } from "./pokemonActionTypes";

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

        case DELETE_POKEMON_LIST:

        return{
            ...state, pokemonList: []
        }
        default:
            return state;
    }
}