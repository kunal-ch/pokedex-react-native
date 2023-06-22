import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const CardTitle = ({ navigation, name, id, showTitle, height = undefined, width = '100%', imageHeight = 100, imageWidth = 100 }) => {
    console.log(navigation)
    return (
        <Pressable
            style={[styles.viewSytle, { height, width }]}
            onPress={() => navigation.navigate('Detail')}>
            <View>
                <LinearGradient
                    colors={['#C0D4C8', '#CFB7ED']}
                    style={styles.gradientStyle}>

                    <Image
                        style={[styles.imageStyle, { width: imageWidth, height: imageHeight }]}
                        source={require('../../assets/image1.png')} />

                    {showTitle && <View style={styles.viewTextStyle}>
                        <Text style={styles.textNameStyle}>
                            {name}
                        </Text>

                        <Text style={styles.textNumberStyle}>
                            {id}
                        </Text>
                    </View>}

                </LinearGradient>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        marginVertical: 36,
        alignSelf: 'center'
    },

    gradientStyle: {
        flex: 1,
        borderRadius: 8
    },

    viewSytle: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: "space-between"
    },

    viewTextStyle: {
        alignItems: "center",
        marginBottom: 16,
    },

    textNameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E3156'
    },

    textNumberStyle: {
        fontSize: 16,
        marginTop: 4,
        color: '#2E3156'
    },
})

export default CardTitle;