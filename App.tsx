import React from "react";
import { SafeAreaView } from "react-native"
import PokemonListScreen from "./src/screens/PokemonListScreen";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <PokemonListScreen/>
    </NavigationContainer>
  );
}

export default App;