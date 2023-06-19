import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Switch, ScrollView } from 'react-native'
import CustomButton from "./CustomButton";
import Filter from "./Filter";

const FilterDialog = () => {    
    return <View style={styles.viewStyle}>

            <View style={styles.viewHeaderStyle}>

                <Text style={styles.textStyle}>
                    Filters
                </Text>

                <Image
                    style={styles.imgStyle}
                    source={require('../../assets/img_close_circle.png')} />
            </View>

            <View style={styles.viewLineStyle}/>

            {/* <ScrollView>

                <Filter filtername={"Type"}/>
                <Filter filtername={"Gender"}/>
                <Filter filtername={"Stats"}/>

            </ScrollView> */}

            <View style={styles.viewBottomStyle}>

                <View style={styles.viewBottomLineStyle}/>

                <CustomButton isBackgroundColor={false} btnName={'Reset'} btnWidth={'50%'}/>
                <CustomButton isBackgroundColor={true} btnName={'Apply'} btnWidth={'50%'}/>

            </View>


        </View>
}

const styles = StyleSheet.create({
    
    viewStyle: {
        margin: 24,
        borderRadius: 8,
        backgroundColor: 'white'
    },

    viewHeaderStyle: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    viewLineStyle: {
        marginTop: 12,
        borderBottomColor: '#2E315626',
        borderBottomWidth: 2,
    },

    textStyle: {
        marginTop: 4,
        color: '#2E3156',
        fontSize: 25,
        fontWeight: '800'
    },

    imgStyle: {
        width: 24,
        height: 24,
        marginTop: 6,
        marginRight: 20
    },

    viewBottomStyle: {
        position: "absolute",
        top: 100,
        bottom: 0,
        left: 0,
        right: 0
    },

    viewBottomLineStyle: {
        borderBottomColor: '#2E315626',
        borderBottomWidth: 2,
        flexDirection: "row"
    },
})

export default FilterDialog

