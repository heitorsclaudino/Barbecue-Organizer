import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./context/mainContext";

import Home from "./pages/Home";
import ConfigPrecos from "./pages/ConfigPrecos";
import MeusChurras from "./pages/MeusChurras";
import Churras from "./pages/Churras";
import Pessoas from "./pages/Pessoas";
import Assados from "./pages/Assados";
import Bebidas from "./pages/Bebidas";
import Acompanhamentos from "./pages/Acompanhamentos";
import Info from "./pages/Info";
import Resultados from "./pages/Resultados";
import Receitas from "./pages/Receitas";
import Localizacao from "./pages/Localizacao";

const Stack = createStackNavigator();

export default function Routes() {
  return ( 
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="home">

          <Stack.Screen name="home" component={Home} options={configHeader} />
          <Stack.Screen name="configPrecos" component={ConfigPrecos} options={configHeader} />
          <Stack.Screen name="meusChurras" component={MeusChurras} options={configHeader} />
          <Stack.Screen name="churras" component={Churras} options={configHeaderChurras} />
          <Stack.Screen name="pessoas" component={Pessoas} options={configHeader} />
          <Stack.Screen name="assados" component={Assados} options={configHeader} />
          <Stack.Screen name="bebidas" component={Bebidas} options={configHeader} />
          <Stack.Screen name="acompanhamentos"component={Acompanhamentos} options={configHeader} />
          <Stack.Screen name="info" component={Info} options={configHeader} />
          <Stack.Screen name="resultados" component={Resultados} options={configHeader} />
          <Stack.Screen name="receitas" component={Receitas} options={configHeader} />
          <Stack.Screen name="localizacao" component={Localizacao} options={configHeader} />

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const configHeader = {
    title: 'Barbecue Organizer',
    headerStyle: {
      backgroundColor: '#b43434',
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25
    }
}

const configHeaderChurras = {
  title: 'Barbecue Organizer',
  headerStyle: {
    backgroundColor: '#b43434',
  },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 25
  },
  headerLeft: false
}