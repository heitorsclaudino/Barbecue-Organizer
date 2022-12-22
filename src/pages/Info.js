import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Alert, ScrollView } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Info(props) {
  const { data, setInfo, calculaChurrasco, precoTotal, verificaNome } = useContext(MainContext);

  const [name, setName] = useState(data.info.evento.nomeOrganizador);
  const [tel, setTel] = useState(data.info.evento.telefone);
  const [ender, setEnder] = useState(data.info.local.endereco);
  const [cep, setCep] = useState(data.info.local.cep);
  const [price, setPrice] = useState(data.info.local.custo);
  const [nomeChurras, setNomeChurras] = useState(data.info.nomeChurras);
  
  const nomeSemEspacos = nomeChurras.trim();
  
  const [semNome, setSemNome] = useState(false);
  const [existeNome, setExisteNome] = useState(false);

  setInfo(name, tel, ender, cep, price, nomeSemEspacos);

  return (
    <View style={styles.view}>
      <ImageBackground
        blurRadius={3}
        resizeMode="cover"
        opacity={0.48}
        source={require("../../assets/fundo.png")}
        style={styles.image}
      >
        <Text style={styles.textTitulo}>Informações</Text>

        <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
          <Text style={styles.organizador}>Nome do Churrasco:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setNomeChurras}
            value={nomeChurras}
          />
        </View>

        <View style={styles.linha}></View>

        <View style={styles.container1}>
          <Text style={styles.text}>E{'\n'}v{'\n'}e{'\n'}n{'\n'}t{'\n'}o</Text>
          <View style={styles.evento}>
            <View style={styles.item}>
              <Text style={styles.organizador}>Nome do Organizador:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={setName}
                value={name}
                />
            </View>
            <View style={styles.item}>
              <Text style={styles.organizador}>Telefone de Contato:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={setTel}
                value={tel}
                keyboardType="numeric"
                />
            </View>
          </View>
        </View>

        <View style={styles.linha}></View>

        <View style={styles.container2}>
          <View style={styles.local}>
              <View style={styles.item}>
                <Text style={styles.organizador}>Endereço:</Text>
                <TextInput
                  style={styles.inputs}
                  onChangeText={setEnder}
                  value={ender}
                />
              </View>
              <View style={styles.item}>
                <Text style={styles.organizador}>Custo:</Text>
                <TextInput
                  style={styles.inputs}
                  onChangeText={setPrice}
                  value={price}
                  keyboardType="numeric"
                />
              </View>
          </View>
          <Text style={styles.text2}>L{'\n'}o{'\n'}c{'\n'}a{'\n'}l</Text>
        </View>
        </ScrollView>
        {semNome ? <View><Text style={styles.alert}>O seu churrasco deve ter um nome</Text></View> : null}
        {existeNome ? <View><Text style={styles.alert}>Já existe um churrasco com esse nome</Text></View> : null}
        <View style={styles.btns}>
          <TouchableOpacity style={styles.next}
          onPress={() => {
            props.navigation.navigate("localizacao");
          }}
          >
            <Text style={styles.textNext}> Localização </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              verificaNome(nomeChurras)
                .then(value => {
                  if (value == null) {
                    setExisteNome(false);
                    if (data.info.nomeChurras == "") {
                      setSemNome(true);
                    } else {
                      setSemNome(false);
                      calculaChurrasco();
                      precoTotal();
                      props.navigation.navigate("resultados");
                    }
                  } else if (value != null) {
                    setExisteNome(true);
                  }
                })
                .catch(error => console.log(error));
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
  view: {
    flex: 1,
  },
  image: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },

  scrollView:{
    flex:1,
  },

  textTitulo: {
    backgroundColor: "#FFCE51",
    color: "#b43434",
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
    marginTop:20,
    marginBottom:10,
    fontWeight: 'bold',
  },


  container:{
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    marginTop:15,
  },
  container1:{
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    marginTop:15,
  },
  container2:{
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    marginTop:15,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#b43434",
    color:"#fff",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderRadius: 5,
    textAlign: "center",
    maxHeight:200,
  },
  text2: {
    fontSize: 25,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#b43434",
    color:"#fff",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderRadius: 5,
    textAlign: "center",
    maxHeight:260,
  },
  inputs: {
    borderColor: "#black",
    borderWidth: 3,
    borderRadius: 5,
    height: 25,
    padding: 5,
    backgroundColor: "#ede6c7",
    marginTop: 2,
    marginBottom: 2,
    height: 50,
    textAlign: "center",
    opacity: 0.8,
    color: "#fc0000",
    letterSpacing: 2,
  },
  evento: {
    width: 300,
    height:200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  local: {
    flex:1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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


  linha:{
    backgroundColor: "#FFCE51",
    height:3,
    marginTop:15,
  },

  
  map: {
    height: 250,
    width: Dimensions.get("window").width,
  },
  organizador: {
    textAlign: "center",
    fontSize: 15,
    backgroundColor: "#FFCE51",
    letterSpacing: 2,
    color: "#b43434",
    borderRadius: 5,
    padding: 5,
  },

  alert: {
    backgroundColor: "#B43434",
    color: "#fff",
    borderRadius: 5,
    fontSize: 15,
    padding: 5,
    marginTop: 5,
  },
});
