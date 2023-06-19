import React from "react";
import { StyleSheet, FlatList, View, Text, Image, ScrollView } from "react-native"
import CardTitle from "../components/CardTitle";
import Search from "../components/Search";

const PokemonListScreen = () => {
    const items = Array(10).fill(0)
    return (
        <View style={styles.viewStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textTitleStyle}>
                    Pokédex
                </Text>

                <View style={styles.viewLineStyle}/>

                <Text style={styles.textDescStyle}>
                    Search for any Pokémon that exists on the planet
                </Text>

                <View style={styles.searchStyle}>
                    <Search/>
                    <Image styles={{flex:1}} source={require('../../assets/img_filter.png')} />
                </View>

                <FlatList style={styles.flatListStyle}
                    data={items}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{height: 18}}/> }
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({ items }) => <CardTitle showTitle={true} name={'Bulbasaur'} id={'001'} width={'47%'}/>
                    }/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 28,
        backgroundColor: '#DEEDED'
    },

    viewLineStyle: {
        marginTop: 12,
        color: '#5D5F7E',
        borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    textTitleStyle: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 36,
        color: '#2E3156',
    },

    textDescStyle: {
        marginTop: 10,
        fontSize: 16,
        color: '#5D5F7E'
    },

    searchStyle: {
        flex: 1,
        flexDirection: "row",
        marginTop: 36
    },

    flatListStyle: {
        marginTop: 30
    }
})

export default PokemonListScreen;