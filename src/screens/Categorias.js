import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Feed() {

    return (
        <View style={css.container}>
            <SearchBar
                placeholder="Pesquisar categoria..."
                containerStyle={{ backgroundColor: '#b22222' }}
                inputContainerStyle={{ backgroundColor: '#b22222' }}
                searchIcon={{ color: '#fff' }}
                inputStyle={{ backgroundColor: 'white', height: 5, borderRadius: 5 }}
                marginTop={10}
            />
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='fridge'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Geladeiras</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='microwave'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Microondas</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='stove'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Fogão</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='washing-machine'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Lava-Roupa</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='dishwasher'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Lava-Louças</Text>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b22222',
        paddingTop: 50,
    },
    box: {
        flexDirection: 'row',
        margin: 6,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
})