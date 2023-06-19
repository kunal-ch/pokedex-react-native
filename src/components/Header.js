import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Header = ({name, id}) => {
    return <View>
        
        <Text style={styles.textNameStyle}>
            {name}
        </Text>

        <Text style={styles.textNumberStyle}>
            {id}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    textNameStyle: {
        fontWeight: 800,
        fontSize: 30,
        color: '#2E3156'
    },

    textNumberStyle: {
        fontWeight: 400,
        fontSize: 30,
        color: '#2E3156'
    }
})

export default Header;