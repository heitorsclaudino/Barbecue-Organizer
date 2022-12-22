import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";
import Preco from "./Preco";

export default function CarregaPrecos(props) {
    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>            
            <FlatList
                data={data.comidas[props.type]}
                renderItem={({item, index}) => {
                    return (
                        <Preco nome={item.nome} class={props.type} one={index} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})