import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Section from "../components/Section";

export default function Bebidas(props) {
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Escolha suas Bebidas</Text>
                <View style={styles.container}>
                    <Section tipo="Bebidas" />
                </View>
                <TouchableOpacity
                    onPress={() => {props.navigation.navigate("acompanhamentos")}} style={styles.next}>
                    <Text style={styles.textNext}>Prosseguir</Text>
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
    container:{
        flex: 1,
        flexDirection:"row",
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
})