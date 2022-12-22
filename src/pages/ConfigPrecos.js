import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput, ScrollView} from "react-native";
import { MainContext } from "../context/mainContext";
import CarregaPrecos from "../components/CarregaPrecos";

export default function ConfigPrecos(props) {

    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
            
            <Text style={styles.textTitulo}>Defina os preço:</Text>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Carne Bovina" />
                    </View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Carne Suina" />
                    </View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Frango" />
                    </View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Bebidas" />
                    </View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Acompanhamentos" />
                    </View>
                    <View style={styles.container}>
                        <CarregaPrecos type="Sem Falta" />
                    </View>
                </View>
            </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('home');
                    }}
                    style={styles.next}
                >
                    <Text style={styles.textNext}>Salvar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
    },
    view: {
        flex: 1
    },
    textTitulo: {
        alignSelf:"center",
        textAlign:"center",
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        margin:15,
        fontWeight: 'bold',
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly"
    },
    container:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
    },
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 15,
        margin:15,
    },
    textNext: {
        alignSelf:"center",
        color: '#b43434',
        fontSize: 25,
    }
  })