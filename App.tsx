import React from "react";
import PokemonListScreen from "./src/screens/PokemonListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from "./src/screens/PokemonDetailScreen";
import FilterDialog from "./src/components/FilterDialog";
import InfoDialog from "./src/components/InfoDialog";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={PokemonListScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Detail"
            component={PokemonDetailScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Filter"
            component={FilterDialog}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Info"
            component={InfoDialog}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;