import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ParameterItem from "./ParameterItem";

const ParameterGroup = () => {
    return <View style={styles.viewParentStyle}>
            <View style={styles.viewChildStyle}>
                <ParameterItem title={'Height'} value={'5’7”'}/>
                <ParameterItem title={'Weight'} value={'90.5 Kg'}/>
            </View>

            <View style={styles.viewChildStyle}>
                <ParameterItem title={'Gender(s)'} value={'Male, Female'}/>
                <ParameterItem title={'Egg Groups'} value={'Monster, Dragon'}/>
            </View>

            <View style={styles.viewChildStyle}>
                <ParameterItem title={'Abilities'} value={'Blaze, Solar Power'}/>
                <ParameterItem title={'Types'} value={'Fire, Flying'}/>
            </View>

            <View style={styles.viewChildStyle}>
                <ParameterItem title={'Weak Against'} value={'Fighting, Ground, Steel, Water, Grass'}/>
            </View>
    </View>
}

const styles = StyleSheet.create({
    viewParentStyle: {
        marginBottom: 40
    },

    viewChildStyle: {
        flexDirection: "row",
        marginTop: 36
    },

    parameterStyle: {
       
    }
})

export default ParameterGroup;