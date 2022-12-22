import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";

import ModalReceita from "../components/ModalReceita";

export default function Receitas(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [id, setID] = useState("");

  return (
    <View style={styles.view}>
      <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                        <ScrollView>
                      <Text style={styles.tituloSection}> Carnes Bovinas </Text>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Contra-filé </Text>
                              <Text style={styles.receita}>
                                  1° Salgue a carne apenas no momento em que for levar a brasa. {"\n"}2°
                                  Coloque em uma grelha bem quente e asse por aproximadamente 5 minutos
                                  de cada lado ou até que a fraldinha esteja dourada. {"\n"}3° Retire da brasa
                                  e deixe descansar por aproximadamente 5 minutos antes de cortar.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Fraldinha </Text>
                              <Text style={styles.receita}>
                              1 °Tempere com o limão e o sal grosso. {"\n"}2° Deixe marinar por
                              algunsminutos, espete a carne com um espeto duplo para churrasco e
                              leve à churrasqueira em fogo brando.{"\n"} 3° Quando a carne estiver dourada,
                              retireda churrasqueira, fatie a parte dourada (com a carne ainda no
                              espeto). {"\n"}4° A carne que ainda está no espeto (que está malpassada) deve
                              ser salgada novamente e levada à churrasqueira para grelhar.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Maminha </Text>
                              <Text style={styles.receita}>
                              1 °Polvilhe um pouco de sal grosso em todos os lados da carne. {"\n"}2°
                              Coloque para churrasquear na grelha bem quente e em braseiro forte. {"\n"}3°
                              Quando a carne se soltar da grelha, vire. Assim que atingir o ponto
                              desejado, sirva cortada em fatias finas. {"\n"}4° Acompanhe com farinha de
                              mandioca crua, batata estufada e salada.
                              </Text>
                          </View>

                      <Text style={styles.tituloSection}>Carnes Suínas</Text>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Picanha Suína </Text>
                              <Text style={styles.receita}>
                              1 °Deixe a picanha suína inteira, passe a paprica picante, o ají
                              Chileno e o sal grosso por toda a carne de maneira uniforme. {"\n"}2° Coloque
                              a carneem um saco plastico junte todos os outros ingredientes. {"\n"}3° Deixe
                              descansar por 30 minutos. Coloque em uma grelha e leve pra
                              churrasqueira em fogo médio por aproximadamente 50 minutos virando a
                              grelha a cada 10 minutos. {"\n"}4° Retire do fogo, pincele o molho barbecue e
                              volte ao fogo por mais 10 minutos.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Linguiça </Text>
                              <Text style={styles.receita}>
                              1° Espete a linguiça em espetos de churrasco e leve à churrasqueira
                              por 40 minutos, virando algumas vezes ou até assar e dourar. {"\n"}2° Retire,
                              corte em rodelas e sirva com farofa e limão.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Paleta </Text>
                              <Text style={styles.receita}>
                              1° Num recipiente tempere a paleta com o azeite, o sal, o limão, o
                              alecrim e a pimenta vermelha. {"\n"} 2° Deixe marinar por aproximadamente 1
                              hora. {"\n"}3° Acomode a paleta numa grelha sardinheira e leve à
                              churrasqueira em fogo brando. {"\n"}4° Quando estiver dourada, retire da
                              churrasqueira e acomode em um prato. Prato pronto é só servir e bom
                              apetite. {"\n"}5° O tempo de preparo depende do braseiro utilizado. {"\n"}6° Vale
                              lembrar que o fogo muito forte vai dourar por fora e não vai assar por
                              dentro.
                              </Text>
                          </View>
                                  <Text style={styles.tituloSection}>Frango</Text>
                                     <View style={styles.card}>
                              <Text style={styles.titulo}> Coxa de frango </Text>
                              <Text style={styles.receita}>
                              1° Tempere as coxas de frango com sal e limão e pimenta como desejar,
                              deixe penetrar os ingredientes por 2 horas. {"\n"}2° Coloque na churrasqueira
                              sempre olhando e quando estiver dourando um pouco adicione gergelim e
                              manteiga por cima para fixar.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Asa de frango </Text>
                              <Text style={styles.receita}>
                              1° Coloque as asinhas em um recipiente.{"\n"}
                              2° Tempere-as com o sal e o limão.{"\n"}
                              3° Deixe marinar por 20 minutos. Utilizando um espeto duplo para
                              churrasco, espete as asinhas (coloque elas sempre do mesmo lado) e
                              leve à churrasqueira em fogo brando.{"\n"}
                              4° Altura de 40 centímetros por aproximadamente 30 minutos.{"\n"}
                              5° Quando as asinhas estiverem douradas, retire da churrasqueira.{"\n"}
                              6° Vale lembrar que o fogo muito forte vai dourar por fora e não vai assar por dentro.
                              </Text>
                          </View>
                          <View style={styles.card}>
                              <Text style={styles.titulo}> Coração de frango </Text>
                              <Text style={styles.receita}>
                              1° Em uma bacia, coloque os corações de frango, adicione o óleo e o
                              alho.{"\n"} 2° Salgue a gosto com o sal grosso e mexa bem. Espete os
                              corações em espeto de bambu ou no de sua preferência. {"\n"}3° Asse-os em
                              brasa sem fogo alto, por aproximadamente 30 minutos.
                              </Text>
                          </View>
                        </ScrollView>
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
    justifyContent: "space-around",
  },
  receita: {
    backgroundColor: '#ede6c7',
    fontSize: 18,
    letterSpacing: 1,
    marginHorizontal: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5
}, 

tituloSection: {
  fontSize: 24,
  color: '#b43434',
  backgroundColor: "#FFCE51",
  padding: 10,
  borderRadius: 15,
  margin:15,
  fontWeight: 'bold',
},

  titulo: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    letterSpacing: 2,
    backgroundColor: "#FFCE51",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20 
  },
  safeview:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
  btn: {
    backgroundColor: '#ede6c7',
    marginBottom: 15,
    marginHorizontal: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ede6c7",
    borderRadius: 5,
    width: 350,
  },
  btnTitle: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#000',
  }
});