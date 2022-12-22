import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaInfo(props) {
    const {data} = useContext(MainContext);

    return(
        <View>
            <View style={styles.views}>
                <Text style={styles.itensHeadO}>Organizador</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.itensO}>-⨳- {data.info.evento.organizador} -⨳-</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.itensHead}>Telefone</Text>
                <Text style={styles.itensHead}>Local</Text>
                <Text style={styles.itensHead}>Custo do Local</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.itens}>{data.info.evento.telefone}</Text>
                <Text style={styles.itens}>{data.info.local.endereco}</Text>
                <Text style={styles.itens}>R${data.info.local.custo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
    },
    itens: {
        width: 116,
        textAlign: 'center',
        color: "#fff",
        marginBottom: 5,
    },
    itensHead: {
        width:116,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
    },
    itensHeadO: {
        width: 350,
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
    },
    itensO: {
        width: 350,
        fontSize:15,
        textAlign: 'center',
        color: "#fff",
        marginBottom: 10,
    },
});