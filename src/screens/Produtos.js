import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../style/ProductStyle';

export default function Feed() {

    return (
        <ScrollView >
            <View style={styles.container}>
                <SearchBar
                    placeholder="Pesquisar produto..."
                    containerStyle={{backgroundColor: '#b22222'}}
                    inputContainerStyle={{backgroundColor: '#b22222'}}
                    searchIcon={{color: '#fff'}}
                    inputStyle={{backgroundColor: 'white', height: 5, borderRadius: 5}}
                    marginTop={10}
                />
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/fogao1.jpeg')} />
                    <Text style={styles.title}>Fogão 4 Bocas</Text>
                    <Text style={styles.preco}>De: R$ 1100.00</Text>
                    <Text style={styles.oferta}>Por: R$ 980.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/geladeirabrastemp3.jpeg')} />
                    <Text style={styles.title}>Geladeira Frost Free</Text>
                    <Text style={styles.preco}>De: R$ 5780.00</Text>
                    <Text style={styles.oferta}>Por: R$ 5540.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/microondas3.jpeg')} />
                    <Text style={styles.title}>Micro-ondas Consul</Text>
                    <Text style={styles.preco}>De: R$ 500.00</Text>
                    <Text style={styles.oferta}>Por: R$ 405.99</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/lavaroupa2.jpeg')} />
                    <Text style={styles.title}>Lavadora de Roupas Philco inverter 12KG</Text>
                    <Text style={styles.preco}>De: R$ 2135.00</Text>
                    <Text style={styles.oferta}>Por: R$ 1725.99</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
