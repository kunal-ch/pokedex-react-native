import { SET_POKEMON_LIST } from "./pokemonActionTypes";

const initialState = {
    pokemonList: [
        
    ]
}
export const pokemonReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case SET_POKEMON_LIST:

            return {
                ...state, pokemonList: [...payload]
            };
        default:
            return state;
    }
}