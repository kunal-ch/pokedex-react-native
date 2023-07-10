import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text, Image, ScrollView, Pressable, SafeAreaView } from "react-native"
import CardTitle from "../components/CardTitle";
import Search from "../components/Search";
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonList } from "../redux/pokemon/pokemonAction";
import axios from "axios";

const PokemonListScreen = ({ navigation }) => {
    //console.log(this.props)
    //const items = Array(10).fill(0)

    const dispatch = useDispatch()
    const myList = useSelector((state) => state.pokemonList)

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                console.log(res)
                dispatch(setPokemonList(res.data.results))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.viewStyle}>
                <ScrollView showsVerticalScrollIndicator={false}>
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

                    <FlatList style={styles.flatListStyle}
                        data={myList}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        keyExtractor={item => item.name}
                        renderItem={
                            ({ item }) => {
                                console.log(item)
                                return (
                                    <CardTitle
                                        navigation={navigation}
                                        showTitle={true}
                                        name={item.name}
                                        id={'001'}
                                        width={'47%'} />
                                );
                            }
                        } />
                </ScrollView>
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
        flex: 1,
        flexDirection: "row",
        marginTop: 36
    },

    flatListStyle: {
        marginTop: 30
    }
})

export default PokemonListScreen;