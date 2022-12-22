import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaTotais(props) {
    const {data} = useContext(MainContext);

    return(
        <View>
            <View style={styles.views}>
                <Text style={styles.itensHead}>Total de Carne (kg)</Text>
                <Text style={styles.itensHead}>Total de Bebidas (L)</Text>
                <Text style={styles.itensHead}>Custo por Pessoa</Text>
                <Text style={styles.itensHead}>Custo Total</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.itens}>{data.comidas.totalCarne}</Text>
                <Text style={styles.itens}>{data.comidas.totalLitros}</Text>
                <Text style={styles.itens}>R${data.custoPorPessoa}</Text>
                <Text style={styles.itensT}>R${data.custoTotal}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
    },
    itens: {
        width: 95,
        textAlign: 'center',
        color: "#fff"
    },
    itensHead: {
        width: 95,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff"
    },
    itensT: {
        width: 95,
        textAlign: 'center',
        color: "#000",
        fontWeight: 'bold',
        backgroundColor: "#FFCE51",
    },
});