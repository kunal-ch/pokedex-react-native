import React from "react";
import { SafeAreaView } from "react-native"
import PokemonListScreen from "./src/screens/PokemonListScreen";

const App = () => {
  return <SafeAreaView>
    <PokemonListScreen/>
    {/* <PokemonDetailScreen /> */}
  </SafeAreaView>
}

export default App;