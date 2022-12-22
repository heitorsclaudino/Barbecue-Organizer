import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista from "../components/Lista";
import ListaInfo from "../components/ListaInfo";
import ListaTotais from "../components/ListaTotais";

export default function Resultados(props) {
    const {data, armazenaChurrasco, resetValores} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Resultados</Text>

                <View style={styles.view}>
                    <Text style={styles.textInfo}>⩤ {data.info.nomeChurras} ⩥</Text>
                    <SafeAreaView style={styles.container}>
                        <ScrollView>
                            <View style={styles.lista}>
                                <Lista tipo="Carne Bovina" headers={["Assado", "Quantidade (kg)", "Preço (kg)", "Preço Total"]} />
                                <Lista tipo="Carne Suina" headers={false} />
                                <Lista tipo="Frango" headers={false} />
                            </View>
                            <View style={styles.lista}>
                                <Lista tipo="Bebidas" headers={["Bebida", "Quantidade (L)", "Preço (L)", "Preço Total"]} />
                            </View>
                            <View style={styles.lista}>
                                <Lista tipo="Acompanhamentos" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                            </View>
                            <View style={styles.lista}>
                                <Lista tipo="Sem Falta" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                            </View>
                            <View style={styles.lista}>
                                <ListaInfo />
                            </View>
                            <View style={styles.lista}>
                                <ListaTotais />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        armazenaChurrasco();
                        resetValores();
                        props.navigation.navigate("home");
                    }}
                    style={styles.next}>
                    <Text style={styles.textNext}>Salvar Churrasco</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image:{
      backgroundColor: "#000",
      alignItems: 'center',
      flex: 1,
      justifyContent: "space-evenly"
    },

    
    textTitulo: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
        marginTop:20,
        fontWeight: 'bold',
    },
    textInfo: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 23,
        marginTop:20,
        letterSpacing: 2,
        textAlign: 'center', 
    },

    container:{
        flex: 1,
        flexDirection:"column",
        justifyContent: "center",
        marginTop:10,
        
    },
    

    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20,
        margin:20,
    },
    textNext: {
        color: "#b43434",
        fontSize: 20,
    },

    resultados: {
        backgroundColor: "#FFF",
        fontSize: 20
    },
    lista: {
        color:"#fff",
        backgroundColor: "#b43434",
        marginTop:10,
    },
    totais: {
        textAlign: 'center',
    }
})