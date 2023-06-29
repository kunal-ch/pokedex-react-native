import { createStore } from 'redux'
import { pokemonReducer } from './pokemon/pokemonReducer'

const store = createStore(pokemonReducer)
export default store