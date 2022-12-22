import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, FlatList, TouchableOpacity, Modal, Alert, ScrollView } from "react-native";
import { MainContext } from "../context/mainContext";


export default function MeusChurras(props) {
    const createButtonAlert = () => {
        Alert.alert(
            "Confirmação",
            "Deseja mesmo excluir todos os churrascos?",
            [
                {
                    text: "Não",
                    onPress: () => {console.log("Cancelado")}
                },
                {
                    text: "Sim",
                    onPress: () => {
                        excluirChurrascos();
                        props.navigation.navigate("home");
                    }
                }
            ]
        )
    }
    const {data, excluirChurrascos, getNewData, setNewData} = useContext(MainContext);
    
    const [load, setLoad] = useState(false);
    const [dados, setDados] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await AsyncStorage.getAllKeys();
            setDados(response);
            setLoad(true);
        }
        getData();
    },[]);

    if (load == true && dados.length != 0) {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <View style={styles.view3}>
                        <Text style={styles.textTitulo}>Seus Churrascos</Text>
                        <FlatList
                            data={dados}
                            renderItem={({item}) => {
                                return(
                                    <View style={styles.view3}>
                                        <View style={styles.container}>
                                            <ScrollView style={styles.scrollView}>
                                                <View style={styles.container}>
                                                    <TouchableOpacity
                                                        style={styles.btn}
                                                        onPress={() => {
                                                            getNewData(item)
                                                                .then(value => setNewData(value))
                                                                .then(() => props.navigation.navigate("churras"))
                                                                .catch(error => console.log(error));
                                                        }}
                                                        activeOpacity={0.7}>
                                                            <Text style={styles.textbtn}>{item}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </ScrollView>
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.next}
                        onPress={createButtonAlert}
                        activeOpacity={0.7}>
                            <Text style={styles.textNext}>Excluir Churrascos</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={styles.next}
                        onPress={() => {
                            excluirChurrascos();
                            props.navigation.navigate("home");
                        }}
                        activeOpacity={0.7}>
                            <Text style={styles.textNext}>Excluir Churrascos - PROVISORIO</Text>
                    </TouchableOpacity> */}
                </ImageBackground>
            </View>
        );
    } else if (load == true && dados.length == 0) {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <View style={styles.view2}>
                        <Text>Nenhum churrasco encontrado</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    } else {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <ActivityIndicator />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    view2: {
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: '#FFCE51',
        borderRadius: 10,
        padding: 10,
    },
    view3: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly",
    },
    scrollView:{
        flex:1,
    },


    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 20,
        padding:5,
        minWidth:"95%",
    },
    textbtn:{
        flex:1,
        textAlign:'center',
        letterSpacing:2,
        color:'#b43434',
        fontWeight:'bold',
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
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
        marginTop:10,
    },

    next: {
        backgroundColor: "#b43434",
        padding: 10,
        borderRadius: 20,
        margin:20,
    },
    textNext: {
        color: "#FFCE51",
        fontSize: 20,
    },
});