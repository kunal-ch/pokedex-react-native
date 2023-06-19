import React from "react";
import { SafeAreaView, Text } from "react-native"
import PokemonDetailScreen from "./src/screens/PokemonDetailScreen";
import InfoDialog from "./src/components/InfoDialog";
import PokemonListScreen from "./src/screens/PokemonListScreen";
import FilterDialog from "./src/components/FilterDialog";
import Filter from "./src/components/Filter";
import CustomButton from "./src/components/CustomButton";

const App = () => {
  return <SafeAreaView>
    {/* <PokemonListScreen/> */}
    {/* <PokemonDetailScreen /> */}
    {/* <InfoDialog/> */}
    <FilterDialog/>
    {/* <Filter filtername={'Type'}>
      <Text>App</Text>
    </Filter> */}
    {/* <CustomButton btnName={'Reset'}/> */}
  </SafeAreaView>
}

export default App;