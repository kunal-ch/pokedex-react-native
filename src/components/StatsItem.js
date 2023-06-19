import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const StatsItem = ({name, points}) => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textTitleStyle}>
            {name}
        </Text>

        <View style={styles.backgroundViewStyle}>
            
            <View style={styles.fillViewStyle}>
                
                <Text style={styles.valueTextStyle}>
                    {points}
                </Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        alignItems: "center",

    },

    innerViewStyle: {
        flex: 2.5
    },

    textTitleStyle: {
        fontSize: 16,
        color : '#2E3156',
        flex: 1
    },

    backgroundViewStyle: {
        flex: 2.5,
        width: 214,
        height: 14,
        backgroundColor: '#93B2B2',
    },
    
    fillViewStyle: {
        width: 164,
        height: 14,
        backgroundColor: '#2E3156'
    },

    valueTextStyle: {
        fontSize: 10,
        color: 'white',
        fontWeight: "bold",
        marginLeft: 4,
    }
})

export default StatsItem;