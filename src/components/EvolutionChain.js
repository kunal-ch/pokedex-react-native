import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import CardTitle from "./CardTitle";

const EvolutionChain = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
            Evolution Chain
        </Text>

        <View style={styles.viewEvolutionStyle}>
            <View style={styles.viewCardStyle}><CardTitle imageWidth={65} imageHeight={65} /></View>
            <Image style={{flex:0.5}} source={require('../../assets/img_forward_black.png')}/>
            <View style={styles.viewCardStyle}><CardTitle  imageWidth={65} imageHeight={65} /></View>
            <Image style={{flex:0.5}} source={require('../../assets/img_forward_black.png')}/>
            <View style={styles.viewCardStyle}><CardTitle  imageWidth={65} imageHeight={65} /></View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
    
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 700,
        color: '#2E3156'
    },

    viewEvolutionStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:16,
        gap: 10,
        justifyContent: "space-between"
    },

    viewCardStyle: {
        flex: 3
    }
})

export default EvolutionChain;