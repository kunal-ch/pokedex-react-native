import { SET_POKEMON_LIST } from "./pokemonActionTypes";

const initialState = {
    pokemonList: [
        {
            id: 1,
            name: "Bulbasaur",
            image: `require('../../assets/image1.png')`
        },
        {
            id: 2,
            name: "Charmendor",
            image: `require('../../assets/image1.png')`
        }
    ]
}
export const pokemonReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case SET_POKEMON_LIST:

            return {
                ...state, pokemonList: [...state.pokemonList, ...payload]
            };
        default:
            return state;
    }
}