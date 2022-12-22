import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Preco(props) {
    const {data, mudaPrecoItem} = useContext(MainContext);
    const [item, setItem] = useState(data.comidas[props.class][props.one].preco);

    const valorItem = parseFloat(item)
    mudaPrecoItem(props.class, props.one, valorItem);

    console.log(typeof valorItem);

    return(
        <View style={styles.corpo}>
            <View style={styles.col1}>
                <Text style={styles.textcarnes} >{props.nome}</Text>
            </View>
            <View style={styles.col2}>
                <Text style={styles.rs}>R$ </Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={setItem}
                    value={item}
                    keyboardType="numeric"
                />
                <Text>Padrão: {item}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    corpo: {
        flexDirection: "row",
        alignItems:"center",
        flex:1,
        borderRadius: 5,
        margin: 2,
        backgroundColor: '#FFCE51',
        width:360,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textcarnes: {
        letterSpacing: 1,
        fontSize: 18,
        paddingLeft:5,
    },
    inputs: {
        borderColor: '#b43434',
        borderRadius: 20,
        borderWidth: 3,
        fontSize: 18,
        width:100,
        paddingLeft:15,
        backgroundColor:'#fff',
        
    }
})