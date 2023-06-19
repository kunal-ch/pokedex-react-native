import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Search = () => {
    return <View style={styles.viewStyle}>
        
        <Text style={styles.textStyle}>
            Name or Number
        </Text>

        <Image 
            style = {styles.imageStyle}
            source={require('../../assets/img_search.png')}/>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        height: 56,
        backgroundColor: '#C9DDE2',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        alignSelf: "stretch",
        marginRight: 20
    },

    imageStyle: {
        width: 38,
        height: 33,
    },
    
    textStyle: {
        fontSize: 16,
        fontWeight: 400,
        color: '#5D5F7E80'
    }
})

export default Search;