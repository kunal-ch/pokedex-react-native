import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

const NavButton = ({isForward=true, btnName, btnWidth='100%'}) => {
    return <View style={[styles.viewStyle, {width: btnWidth}]}>

        {!isForward && <Image 
            style={styles.imgStyle}
            source={require('../../assets/img_backward_white.png')}/>}

        <Text style={styles.textStyle}>
            {btnName}
        </Text>

        {isForward && <Image 
            style={styles.imgStyle}
            source={require('../../assets/img_forward_white.png')}/>}
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#2E3156',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",    
        paddingVertical: 14 
    },

    textStyle: {
        flex: 4,
        fontWeight: 700,
        fontSize: 14,
        color: 'white',
        textAlign: "center",
        justifyContent: "center",
    },

    imgStyle: {
        flex: 2,
        width: 14,
        height: 14,
        resizeMode: "contain"
    }
})

export default NavButton;