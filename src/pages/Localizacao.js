import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ImageBackground, Alert } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

import api from "../services/api";

export default function Localizacao(){
    const [marker, setMarker] = useState({
        lat: -23.647874097687232,
        long: -46.721607053968
      });
    
      const [region, setRegion] = useState({
        latitude: -23.647874097687232,
        longitude: -46.721607053968,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      const [cep, setCep] = useState(0);
    
        function changeRegion(latitude, longitude) {
          setRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
    
        function changeMarker() {
          const buscaData = async () => {
            try {
              const response = await api.get(`search?postalcode=${cep}&format=json`);
              console.log(response.data[0]);
              const latitude = JSON.parse(response.data[0].lat);
              const longitude = JSON.parse(response.data[0].lon);
        
              setMarker({
                lat: latitude,
                long: longitude,
              });
    
              changeRegion(latitude, longitude);
    
            } catch (error) {
              console.log(error);
            }
          }
    
          buscaData();
        }
    
          return (
            <View style={styles.container}>
              <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <View style={styles.viewInputs}>
                  <TextInput
                    onChangeText={setCep}
                    value={cep}
                    placeholder="CEP:"
                    style={styles.inputs}
                  />
                  <TouchableOpacity onPress={() => {
                    if(cep){
                      changeMarker();
                    } else{
                      Alert.alert("Nenhum valor procurado.");
                    }
                  }} style={styles.btn}>
                      <Text style={styles.textBtn}>Procurar</Text>
                  </TouchableOpacity>
                </View>
                  <MapView
                    style={styles.mapa}
                    region={ region }
                    onRegionChangeComplete={(region) => setRegion(region)}>
                      <Marker coordinate={
                        {
                          latitude: marker.lat,
                          longitude: marker.long
                        }
                      }
                      title="Seu churrasco"
                      />
                  </MapView>
              </ImageBackground>
            </View>
          );  
        
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
      backgroundColor: "#000",
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-start'
    },
    mapa: {
        height: 300,
        width: 350,
        marginTop: 15,
    },
    viewInputs: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginHorizontal: 10,
    },
    inputs: {
      borderColor: "#000",
      borderWidth: 3,
      borderRadius: 5,
      padding: 5,
      backgroundColor: "#ede6c7",
      marginTop: 2,
      marginBottom: 2,
      height: 50,
      width: 225,
      textAlign: "center",
      opacity: 0.8,
      color: "#fc0000",
      letterSpacing: 2,
      },
      btn: {
        marginLeft: 10,
        backgroundColor: "#FFCE51",
        width: 110,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',

      },
      textBtn: {
        color: '#b43434',
        fontSize: 24,
      }, 
});