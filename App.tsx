import React from "react";
import { SafeAreaView } from "react-native"
import PokemonListScreen from "./src/screens/PokemonListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from "./src/screens/PokemonDetailScreen";

const Stack = createNativeStackNavigator()

const App = () => {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={PokemonListScreen} />
      <Stack.Screen name="Detail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;