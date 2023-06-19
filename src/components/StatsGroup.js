import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import StatsItem from "./StatsItem";

const StatsGroup = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
           Stats 
        </Text>

        <View style={styles.containerViewStyle}>
            <StatsItem name={'HP'} points={78}/>
            <StatsItem name={'Attack'} points={78}/>
            <StatsItem name={'Defense'} points={78}/>
            <StatsItem name={'Speed'} points={78}/>
            <StatsItem name={'Sp. Attack'} points={78}/>
            <StatsItem name={'Sp. Def.'} points={78}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 30,
        paddingTop: 22,
        backgroundColor: '#B0D2D2',
    },

    textStyle:{
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 4,
        color: '#2E3156'
    },

    containerViewStyle: {
        gap: 16,
        marginTop:16
    },
})

export default StatsGroup;