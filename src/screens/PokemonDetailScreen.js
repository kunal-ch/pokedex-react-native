import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable, SafeAreaView } from 'react-native'
import Header from "../components/Header";
import ParameterGroup from "../components/ParameterGroup";
import StatsGroup from "../components/StatsGroup";
import EvolutionChain from "../components/EvolutionChain";
import NavButton from "../components/NavButton";
import CardTitle from "../components/CardTitle";

const PokemonDetailScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.viewStyle}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={styles.viewHeaderStyle}>
                        <Header name={'CHARIZARD'} id={'006'} />

                        <Pressable
                            onPress={() => {
                                console.log('image clicked')
                                navigation.navigate('Home')
                            }}>
                            <Image
                                style={styles.imgCloseStyle}
                                source={require('../../assets/img_close.png')} />
                        </Pressable>
                    </View>

                    <View style={styles.viewCardStyle}>
                        <CardTitle width={'50%'} imageWidth={125} imageHeight={125} />

                        <Pressable
                            onPress={() => navigation.navigate('Info')}>
                            <Text style={styles.textCardStyle}>
                                Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally. When expelling a blast of super . . .
                                read more
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.viewParameterStyle}>
                        <ParameterGroup />
                    </View>

                    <StatsGroup />

                    <View style={styles.viewEvolutionStyle}>
                        <EvolutionChain />
                    </View>

                    <View style={styles.viewNavigationStyle}>
                        <NavButton btnName={'Charmeleon'} isForward={false} btnWidth={'50%'} />
                        <NavButton btnName={'Squirtle'} isForward={true} btnWidth={'50%'} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#DEEDED'
    },

    viewHeaderStyle: {
        margin: 30,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-start"
    },

    viewCardStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 30,
        marginRight: 30
    },

    viewParameterStyle: {
        marginLeft: 30,
        marginRight: 30
    },

    imgCloseStyle: {
        width: 25,
        height: 25,
        padding: 10
    },

    textCardStyle: {
        width: 150,
        fontSize: 18,
        color: '#2E3156'
    },

    viewEvolutionStyle: {
        margin: 30
    },

    viewNavigationStyle: {
        flexDirection: "row",
        margin: 30,
        gap: 20
    },
})

export default PokemonDetailScreen;



