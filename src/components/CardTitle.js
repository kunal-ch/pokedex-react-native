import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';

const CardTitle = ({
    name,
    id,
    image_url,
    types,
    navigation,
    showTitle,
    height = undefined,
    width = '100%',
    imageHeight = 100,
    imageWidth = 100,
}) => {
    var typeList = []
    const typeColors = {
        normal: '#DDCBD0',
        fighting: '#FCC1B0',
        flying: '#B2D2E8',
        poison: '#CFB7ED',
        ground: '#F4D1A6',
        rock: '#C5AEA8',
        bug: '#C1E0C8',
        ghost: '#D7C2D7',
        steel: '#C2D4CE',
        fire: '#EDC2C4',
        water: '#CBD5ED',
        grass: '#C0D4C8',
        electric: '#E2E2A0',
        psychic: '#DDC0CF',
        ice: '#C7D7DF',
        dragon: '#CADCDF',
        dark: '#C6C5E3',
        fairy: '#E4C0CF',
        unknow: '#C0DFDD',
        shadow: '#CACACA',
    }

    for (let i = 0; i < types.length; i++) {
        let name = types[i].type.name
        if (name == 'normal') {
            typeList.push(typeColors.normal)
        }
        if (name == 'fighting') {
            typeList.push(typeColors.fighting)
        }
        if (name == 'flying') {
            typeList.push(typeColors.flying)
        }
        if (name == 'poison') {
            typeList.push(typeColors.poison)
        }
        if (name == 'ground') {
            typeList.push(typeColors.ground)
        }
        if (name == 'rock') {
            typeList.push(typeColors.rock)
        }
        if (name == 'bug') {
            typeList.push(typeColors.bug)
        }
        if (name == 'ghost') {
            typeList.push(typeColors.ghost)
        }
        if (name == 'steel') {
            typeList.push(typeColors.steel)
        }
        if (name == 'fire') {
            typeList.push(typeColors.fire)
        }
        if (name == 'water') {
            typeList.push(typeColors.water)
        }
        if (name == 'grass') {
            typeList.push(typeColors.grass)
        }
        if (name == 'electric') {
            typeList.push(typeColors.electric)
        }
        if (name == 'psychic') {
            typeList.push(typeColors.psychic)
        }
        if (name == 'ice') {
            typeList.push(typeColors.ice)
        }
        if (name == 'dragon') {
            typeList.push(typeColors.dragon)
        }
        if (name == 'dark') {
            typeList.push(typeColors.dark)
        }
        if (name == 'fairy') {
            typeList.push(typeColors.fairy)
        }
        if (name == 'unknow') {
            typeList.push(typeColors.unknow)
        }
        if (name == 'shadow') {
            typeList.push(typeColors.shadow)
        }
    }
    if (typeList.length == 1) {
        typeList.push(typeList[0])
    }

    return (
        <Pressable
            style={[styles.viewSytle, { height, width }]}
            onPress={() => navigation.navigate('Detail', { pokemonObj: pokemonObj })}>
            <View>
                <LinearGradient
                    colors={typeList}
                    style={styles.gradientStyle}>

                    <SvgUri
                        style={[styles.imageStyle, { width: imageWidth, height: imageHeight }]}
                        width="100"
                        height="100"
                        uri={image_url} />

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