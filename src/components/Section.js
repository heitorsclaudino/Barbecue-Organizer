import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";
import { MainContext } from "../context/mainContext";
import Item from "./Item";

export default function Section(props) {
    const {data} = useContext(MainContext);

    return (
        <View style={styles.view}>
            <Text style={styles.titulo}>{props.tipo}</Text>
            <SafeAreaView style={styles.safeview}>
              <FlatList
                data={data.comidas[props.tipo]}
                renderItem={({item, index}) => {
                  return(
                    <Item class={props.tipo} name={item.nome} position={index} />
                  );
                }}
              style={styles.flat}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
  view:{
    flex:1,
  },
  titulo: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    letterSpacing: 2,
    backgroundColor: "#FFCE51",
    padding: 5,
    borderRadius: 5,
    textAlign: "center", 
  },
  safeview:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
});