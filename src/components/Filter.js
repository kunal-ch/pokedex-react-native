import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const Filter = ({ filtername, children }) => {
    const items = Array(20).fill(0)

    return <View style={styles.viewBackgroundStyle}>
        <View style={styles.viewParentFilterStyle}>

            <Text style={styles.textTypeFilterStyle}>
                {filtername}
            </Text>

            <View style={styles.viewFilterStyle} />

            <Text style={styles.textFilterStyle}>
                (Normal + 5 More)
            </Text>

            <Image
                style={styles.imgFilterStyle}
                source={require('../../assets/img_plus_circle.png')} />

        </View>

        <View style={styles.viewLineStyle} />

        {filtername=='Type' && <FlatList
            style={styles.checkboxFlatListStyle}
            data={items}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between'}}
            renderItem={({ items }) => {
                return (<View style={{ flexDirection: "row", marginTop: 18, alignItems: "center" }}>
                    <CheckBox style={{marginRight: 14}}></CheckBox>
                    <Text>Normal</Text>
                </View>);
            }}
        />}


    </View>
}

const styles = StyleSheet.create({
    viewBackgroundStyle: {
        padding: 14,
        margin: 14,
        borderWidth: 1,
        borderColor: '#2E3156',
        borderRadius: 8,
        marginTop: 28
    },

    viewLineStyle: {
        marginTop: 12,
        borderBottomColor: '#2E315626',
        borderBottomWidth: 2,
    },

    viewParentFilterStyle: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },

    textTypeFilterStyle: {
        color: '#2E3156',
        fontSize: 18,
        fontWeight: '800'
    },

    textFilterStyle: {
        color: '#2E3156',
        fontSize: 18,
        fontWeight: '400'
    },

    imgFilterStyle: {
        width: 24,
        height: 24
    },

    viewFilterStyle: {
        height: '100%',
        width: 1,
        backgroundColor: '#2E315626',
    },

    checkboxFlatListStyle: {
        margin: 20,
    },
})

export default Filter;