import React, { useContext, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MainContext } from "../context/mainContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Item(props) {
    const {setItem, data, mudaItem} = useContext(MainContext);
    const [checkBoxState, setCheckBoxState] = useState(data.comidas[props.class][props.position].status);
    
    setItem(props.class, props.position, checkBoxState);

    return (
      <TouchableOpacity
        style={styles.tudo}
        onPress={() => {
            mudaItem(props.class, props.name, checkBoxState);
            setCheckBoxState(!checkBoxState);
          }}
          >
        <BouncyCheckbox
          style={styles.check}
          fillColor="#B43434"
          disableBuiltInState={true}
          isChecked={checkBoxState}
          onPress={() => {
            mudaItem(props.class, props.name, checkBoxState);
            setCheckBoxState(!checkBoxState);
          }}
        />
        <Text style={styles.name}>{props.name}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    letterSpacing: 2,
    padding: 5,
    paddingRight: 20,
  },
  check: {
    margin: 5,
  },
  tudo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ede6c7",
    margin: 2,
    borderRadius: 5,
    width: 350,
  },
});
