import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const ParameterItem = ({title, value}) => {
    return <View style={styles.viewStyle}>
        
        <Text style={styles.textTitleStyle}>
            {title}
        </Text>

        <Text style={styles.textValueStyle}>
            {value}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },

    textTitleStyle: {
        fontWeight: 700,
        fontSize: 16,
        color: '#2E3156'
    },

    textValueStyle: {
        fontWeight: 400,
        fontSize: 16,
        color: '#2E3156'
    }
})

export default ParameterItem;