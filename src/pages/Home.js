import React, { useContext } from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native"; 


export default function Home(props) {
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <View style={styles.view2}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {props.navigation.navigate("pessoas")}}
                        activeOpacity={0.7}>

                        <Text style={styles.text}>
                            Criar Churrasco
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {props.navigation.navigate("configPrecos")}}
                        activeOpacity={0.7}>

                        <Text style={styles.text}>
                            Configurar Preços
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {props.navigation.navigate("meusChurras")}}
                        activeOpacity={0.7}>

                        <Text style={styles.text}>
                            Meus Churrascos
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    view2: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly"
    },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        padding: 15,
        marginBottom: 20,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: "center",
        letterSpacing: 2,
    }
  })