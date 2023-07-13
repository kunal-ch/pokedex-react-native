import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text, Image, ScrollView, Pressable, SafeAreaView } from "react-native"
import CardTitle from "../components/CardTitle";
import Search from "../components/Search";
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonList } from "../redux/pokemon/pokemonAction";
import axios from "axios";

const PokemonListScreen = ({ navigation }) => {
    //console.log(this.props)

    const dispatch = useDispatch()
    const myList = useSelector((state) => state.pokemonList)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                for (let i = 0; i < res.data.results.length; i++) {
                    axios.get(res.data.results[i].url)
                        .then(res => {
                            dispatch(setPokemonList([res.data]))
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
        .catch(err => {
            console.log(err)
        })
}, [])

return (
    <SafeAreaView>
        <View style={styles.viewStyle}>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Text style={styles.textTitleStyle}>
                Pokédex
            </Text>

            <View style={styles.viewLineStyle} />

            <Text style={styles.textDescStyle}>
                Search for any Pokémon that exists on the planet
            </Text>

            <View style={styles.searchStyle}>
                <Search />
                <Pressable
                    onPress={() => navigation.navigate('Filter')}>
                    <Image
                        styles={{ flex: 1 }}
                        source={require('../../assets/img_filter.png')} />
                </Pressable>
            </View>

            {/* <View style={{ flex: 1}}> */}
            <FlatList style={styles.flatListStyle}
                data={myList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item }) => {
                        console.log(item)
                        return (
                            <CardTitle
                                navigation={navigation}
                                name={item.name}
                                id={item.id}
                                types={item.types}
                                image_url={item.sprites.other.dream_world.front_default}
                                showTitle={true}
                                width={'47%'}
                                url={item.url} />
                        );
                    }
                } />
            {/* </View> */}
            {/* </ScrollView> */}
        </View>
    </SafeAreaView>
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
        flexDirection: "row",
        marginTop: 36
    },

    flatListStyle: {
        marginTop: 30
    }
})

export default PokemonListScreen;