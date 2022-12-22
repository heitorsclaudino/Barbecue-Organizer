import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista(props) {
    const {data} = useContext(MainContext);

    return(
        <View>
            {(props.headers != false) ? <View style={styles.views}>
                <Text style={styles.itensHead}>{props.headers[0]}</Text>
                <Text style={styles.itensHead}>{props.headers[1]}</Text>
                <Text style={styles.itensHead}>{props.headers[2]}</Text>
                <Text style={styles.itensHead}>{props.headers[3]}</Text>
            </View> : null}
            <FlatList
                data={data.comidas[props.tipo]}
                renderItem={({item}) => {
                    if (item.status == true) {
                        return(
                            <View style={styles.views}>
                                <Text style={styles.itens}>{item.nome}</Text>
                                <Text style={styles.itens}>{item.quantidade}</Text>
                                <Text style={styles.itens}>R${item.preco}</Text>
                                <Text style={styles.itens}>R${item.precoTotal}</Text>
                            </View>
                        );
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
        borderBottomWidth: 2,
    },
    itens: {
        width: 95,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "#fff",
        paddingLeft: 10,
    },
    itensHead: {
        width: 95,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff"
    }
});