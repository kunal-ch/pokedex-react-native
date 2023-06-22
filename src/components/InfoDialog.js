import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native'

const InfoDialog = ({ navigation, infoText = "" }) => {
    infoText = "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally. When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely. If CHARIZARD be­comes furious, the flame at the tip of its tail flares up in a whitish-blue color. Breathing intense, hot flames, it can melt almost any­ thing. Its breath inflicts terrible pain on enemies. It uses its wings to fly high. The temperature of its fire increases as it gains exper­\nience in battle. CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. Its wings can carry this POKéMON close to an altitude of 4,600 feet. It blows out\nfire at very high temperatures. It is said that CHARIZARD’s fire burns hotter if it has\nexperienced harsh battles."

    return (
        <SafeAreaView>
            <View style={styles.backgroundViewStyle}>
                <View style={styles.viewStyle}>

                    <Text style={styles.textStyle}>
                        {infoText}
                    </Text>

                    <Pressable
                        style={styles.imgStyle}
                        onPress={() => navigation.navigate('Detail')}>
                        <Image
                            source={require('../../assets/img_close_white.png')} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 20,
        borderRadius: 8,
        backgroundColor: '#2E3156',
        alignSelf: "center",
        justifyContent: "center"
    },

    backgroundViewStyle: {
        width: '100%',
        height: '100%'
    },

    textStyle: {
        marginTop: 16,
        marginLeft: 22,
        marginBottom: 22,
        marginRight: 44,
        color: 'white',
        fontSize: 14
    },

    imgStyle: {
        position: 'absolute',
        right: 16,
        top: 16,
        width: 10,
        height: 10
    }
})

export default InfoDialog

