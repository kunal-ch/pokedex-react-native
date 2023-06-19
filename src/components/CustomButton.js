import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

const CustomButton = ({ btnName, isBackgroundColor = false, btnWidth = '100%' }) => {
    return (
        <View>
            {isBackgroundColor && <View
                style={[styles.viewStyle1, { width: btnWidth }]}>
                <Text style={styles.textStyle1}>
                    {btnName}</Text></View>}

            {!isBackgroundColor && <View
                style={[styles.viewStyle2, { width: btnWidth }]}>
                <Text style={styles.textStyle2}>
                    {btnName}</Text></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle1: {
        backgroundColor: '#2E3156',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 14
    },

    textStyle1: {
        flex: 4,
        fontWeight: 700,
        fontSize: 14,
        color: 'white',
        textAlign: "center",
        justifyContent: "center",
    },

    viewStyle2: {
        borderRadius: 8,
        borderColor: '#2E3156',
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 14,
        borderWidth: 1
    },

    textStyle2: {
        flex: 4,
        fontWeight: 700,
        fontSize: 14,
        color: '#2E3156',
        textAlign: "center",
        justifyContent: "center",
    },
})

export default CustomButton;