import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { MainContext } from "../context/mainContext";

export default function Participantes(props) {
  const { data, adicionaPessoas, somaPessoas } = useContext(MainContext);
  const [quantidade, setQuantidade] = useState(data.pessoas[props.pessoa]);

  adicionaPessoas(props.pessoa, quantidade);
  somaPessoas();

  return (
    <View style={styles.container}>
      <View style={styles.genero}>
        <View>
          <Text style={styles.textgenero}>{props.pessoa}</Text>
        </View>
        <View style={styles.quantidade}>
          <TouchableOpacity
            onPress={() => {
              if (quantidade == 0) {
                setQuantidade(quantidade);
              } else {
                setQuantidade(quantidade - 1);
              }
            }}
          >
            <Icon name="minus" size={35} color="#000"/>
          </TouchableOpacity>
          <View style={styles.quntnum}>
            <Text style={styles.numero}>{quantidade}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setQuantidade(quantidade + 1);
            }}
          >
            <Icon name="plus" size={35} color="#000"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //caixa de seleção
  quantidade: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width: 150,
    letterSpacing: 1,
  },

    //caixa
    quntnum:{
      borderWidth: 0.1,
      borderColor: "black",
      borderRadius: 5,
    },
    //numero
    numero: {
      fontSize: 22,
      margin: 10,
    },
    

  

  textgenero: {
    letterSpacing: 2,
    fontSize: 20,
    // fontWeight:600,
    textAlign: "center",
  },
  genero: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    padding: 5,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container:{
    borderRadius: 5,
    backgroundColor: "#FFCE51",
    height:70,
    // width: "fit-content",
  }
});
