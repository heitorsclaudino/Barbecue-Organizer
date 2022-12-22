import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Section from "../components/Section";

export default function Assados(props) {
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Escolha seus Assados</Text>
                <View style={styles.container}>
                  <Section tipo="Carne Bovina" />
                </View>
                <View style={styles.container}>
                  <Section tipo="Carne Suina" />
                </View>
                <View style={styles.container}>
                  <Section tipo="Frango" /> 
                </View>
                <View style={styles.btns}>
                  <TouchableOpacity
                      onPress={() => {props.navigation.navigate("receitas")}} style={styles.next}>
                      <Text style={styles.textNext}>Receitas</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => {props.navigation.navigate("bebidas")}} style={styles.next}>
                      <Text style={styles.textNext}>Prosseguir</Text>
                  </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  textTitulo: {
    backgroundColor: "#FFCE51",
    color: "#b43434",
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },
  container:{
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    marginTop:10,
  },
  btns:{
    flexDirection:"row",
    justifyContent: "center",
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
});