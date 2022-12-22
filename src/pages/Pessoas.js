import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

import Participantes from "../components/Participantes";
import { MainContext } from "../context/mainContext";

export default function Pessoas(props) {
    const {data} = useContext(MainContext);
    const [adultos, setAdultos] = useState(false);
    const [ninguem, setNinguem] = useState(false);
    
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
            <View style={styles.view}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <View style={styles.parts}>
                    <Participantes pessoa="Homens" />
                </View>
                <View style={styles.parts}>
                    <Participantes pessoa="Mulheres" />
                </View>
                <View style={styles.parts}>
                    <Participantes pessoa="Crianças" />
                </View>
                {ninguem ? <Text style={styles.alert}>Adicione uma pessoa</Text> : null}
                {adultos ? <Text style={styles.alert}>Deve haver pelo menos um adulto</Text> : null}
                <TouchableOpacity
                    onPress={() => { 
                        if(data.pessoas.total == 0) {
                            setNinguem(true)
                        } else if (data.pessoas.totalAdultos == 0) {
                            setNinguem(false);
                            setAdultos(true);
                        } else {
                            setAdultos(false);
                            setNinguem(false); 
                            props.navigation.navigate("assados");
                        }
                    }}
                    style={styles.next}
                >
                    <Text style={styles.textNext}>Prosseguir</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    alert: {
        backgroundColor: "#B43434",
        color: "#fff",
        borderRadius: 5,
        letterSpacing: 2,
        fontSize: 15,
        padding: 5,
    },

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
        alignSelf:"center",
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        margin:15,
    },
    parts:{
        margin:15,
    },

    
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 15,
        margin:15,
    },
    textNext: {
        alignSelf:"center",
        // fontWeight:600,
        color: '#b43434',
        fontSize: 25,
    }
})