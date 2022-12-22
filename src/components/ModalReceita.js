import React from "react";
import {useState} from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalReceita(props){
    const id = props.id;
    let ativo = props.ativo;

    const [visible, setVisible] = useState(ativo);

    switch (id){
        case "1":
            return (
                <View style={styles.container}>
                    <Modal visible={visible} transparent={true} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Contra-filé </Text>
                            <Text style={styles.receita}>
                                1° Salgue a carne apenas no momento em que for levar a brasa {"\n"}2°
                                Coloque em uma grelha bem quente e asse por aproximadamente 5 minutos
                                de cada lado ou até que a fraldinha esteja dourada {"\n"}3° Retire da brasa
                                e deixe descansar por aproximadamente 5 minutos antes de cortar.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "2":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Fraldinha </Text>
                            <Text style={styles.receita}>
                            1 °Tempere com o limão e o sal grosso {"\n"}2° Deixe marinar por
                            algunsminutos, espete a carne com um espeto duplo para churrasco e
                            leve à churrasqueira em fogo brando{"\n"} 3° Quando a carne estiver dourada,
                            retireda churrasqueira, fatie a parte dourada (com a carne ainda no
                            espeto) {"\n"}4° A carne que ainda está no espeto (que está malpassada) deve
                            ser salgada novamente e levada à churrasqueira para grelhar.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "3":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Maminha </Text>
                            <Text style={styles.receita}>
                            1 °Polvilhe um pouco de sal grosso em todos os lados da carne {"\n"}2°
                            Coloque para churrasquear na grelha bem quente e em braseiro forte {"\n"}3°
                            Quando a carne se soltar da grelha, vire. Assim que atingir o ponto
                            desejado, sirva cortada em fatias finas {"\n"}4° Acompanhe com farinha de
                            mandioca crua, batata estufada e salada.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "4":
            return (
                <View style={styles.modal2}>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Picanha Suína </Text>
                            <Text style={styles.receita}>
                            1 °Deixe a picanha suína inteira, passe a paprica picante, o ají
                            Chileno e o sal grosso por toda a carne de maneira uniforme {"\n"}2° Coloque
                            a carneem um saco plastico junte todos os outros ingredientes {"\n"}3° Deixe
                            descansar por 30 minutos. Coloque em uma grelha e leve pra
                            churrasqueira em fogo médio por aproximadamente 50 minutos virando a
                            grelha a cada 10 minutos {"\n"}4° Retire do fogo, pincele o molho barbecue e
                            volte ao fogo por mais 10 minutos.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "5":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Linguiça </Text>
                            <Text style={styles.receita}>
                            1° Espete a linguiça em espetos de churrasco e leve à churrasqueira
                            por 40 minutos, virando algumas vezes ou até assar e dourar {"\n"}2° Retire,
                            corte em rodelas e sirva com farofa e limão.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "6":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Paleta </Text>
                            <Text style={styles.receita}>
                            1° Num recipiente tempere a paleta com o azeite, o sal, o limão, o
                            alecrim e a pimenta vermelha {"\n"} 2° Deixe marinar por aproximadamente 1
                            hora {"\n"}3° Acomode a paleta numa grelha sardinheira e leve à
                            churrasqueira em fogo brando {"\n"}4° Quando estiver dourada, retire da
                            churrasqueira e acomode em um prato. Prato pronto é só servir e bom
                            apetite {"\n"}5° O tempo de preparo depende do braseiro utilizado {"\n"}6° Vale
                            lembrar que o fogo muito forte vai dourar por fora e não vai assar por
                            dentro.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "7":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Coxa de frango </Text>
                            <Text style={styles.receita}>
                            1° Tempere as coxas de frango com sal e limão e pimenta como desejar,
                            deixe penetrar os ingredientes por 2 horas {"\n"}2° Coloque na churrasqueira
                            sempre olhando e quando estiver dourando um pouco adicione gergelim e
                            manteiga por cima para fixar.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "8":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Asa de frango </Text>
                            <Text style={styles.receita}>
                            1° Coloque as asinhas em um recipiente
                            2° Tempere-as com o sal e o limão.
                            3° Deixe marinar por 20 minutos. Utilizando um espeto duplo para
                            churrasco, espete as asinhas (coloque elas sempre do mesmo lado) e
                            leve à churrasqueira em fogo brando
                            4° Altura de 40 centímetros por aproximadamente 30 minutos
                            5° Quando as asinhas estiverem douradas, retire da churrasqueira
                            6° Vale lembrar que o fogo muito forte vai dourar por fora e não vai assar por dentro.
                            </Text>
                            <TouchableOpacity onPress={() => {
                            setVisible(false);
                            
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        case "9":
            return (
                <View>
                    <Modal visible={visible} style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text style={styles.titulo}> Coração de frango </Text>
                            <Text style={styles.receita}>
                            1° Em uma bacia, coloque os corações de frango, adicione o óleo e o
                            alho. 2° Salgue a gosto com o sal grosso e mexa bem. Espete os
                            corações em espeto de bambu ou no de sua preferência. 3° Asse-os em
                            brasa sem fogo alto, por aproximadamente 30 minutos.
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setVisible(false);
                                
                            }} style={styles.next}>
                                <Text style={styles.textNext}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {},
    modal: {},
    modal2: {
        flex:1,
        backgroundColor:'#b43434',
    },
    titulo: {
        fontSize: 24,
        letterSpacing: 2,
        fontWeight: '450',
        backgroundColor: '#FFCE51',
        color: '#b43434',
        fontWeight: 'bold',
    },
    receita: {
        backgroundColor: '#ede6c7',
        fontSize: 18,
        letterSpacing: 1,
    }, btnFechar: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#FFCE51',
        color: '#b43434',
        marginTop: 10,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
    },
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20,
        margin:20,
    },
    textNext: {
        textAlign:'center',
        color: "#b43434",
        fontSize: 20,
      },
});