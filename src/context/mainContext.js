import React, { createContext, useState } from "react";
import data from "../data/data";
import dataLock from "../data/dataLock";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MainContext = createContext();

export default function AuthProvider({children}){

    const adicionaPessoas = (pessoa, quantidade) => {
        if (pessoa == "Homens") {
            data.pessoas[pessoa] = quantidade
        } else if (pessoa == "Mulheres") {
            data.pessoas[pessoa] = quantidade
        } else if (pessoa == "Crianças") {
            data.pessoas[pessoa] = quantidade
        }
    }

    const somaPessoas = () => {
        data.pessoas.total = data.pessoas["Homens"] + data.pessoas["Mulheres"] + data.pessoas["Crianças"];
        data.pessoas.totalAdultos = data.pessoas["Homens"] + data.pessoas["Mulheres"];
    }

    const setItem = (classe, item, estado) => {
        data.comidas[classe][item].status = estado;
    }


    const setInfo = (nome, tel, endereco, cep, custo, nomeChurras) => {
        data.info.evento.organizador = nome;
        data.info.evento.telefone = tel;
        data.info.local.endereco = endereco;
        data.info.local.cep = cep;
        data.info.nomeChurras = nomeChurras;
        if (typeof custo == 'string') {
            custo = parseFloat(custo);
            data.info.local.custo = custo
        } else {
            data.info.local.custo = custo
        }
    }

    const mudaItem = (tipo, item, estado) => {
        if (estado == false) {
            if (tipo == "Carne Bovina" || tipo == "Carne Suina" || tipo == "Frango") {
                data.comidas.totalItensAssados += 1
            } else if (tipo == "Bebidas") {
                data.comidas.totalItensBebidas += 1
                if (item != "Cerveja") {
                    data.comidas.totalItensBebidasCriancas += 1
                }
            }
        } else if (estado == true) {
            if (tipo == "Carne Bovina" || tipo == "Carne Suina" || tipo == "Frango") {
                data.comidas.totalItensAssados -= 1
            } else if (tipo == "Bebidas") {
                data.comidas.totalItensBebidas -= 1
                if (item != "Cerveja") {
                    data.comidas.totalItensBebidasCriancas -= 1
                }
            }
        }
    }

    const mudaPrecoItem = (classe, item, preco) => {
        data.comidas[classe][item].preco = preco;
    }

    const calculaChurrasco = () => {
        
        // ASSADOS

        data.comidas.totalCarne = ((data.pessoas["Homens"] * 60) + (data.pessoas["Mulheres"] * 40) + (data.pessoas["Crianças"] * 25)) / 100;

        /* Depois, pego o total de quilos de carne necessária e divido pela 
        quantidade de intens de assados para saber quantos de cada carne. */

        let quilosPorItem = data.comidas.totalCarne / data.comidas.totalItensAssados;

        /* Para cada tipo de carne, eu varro o vetor a procura dos itens que estão true
        e defino a quantidade por item mais o preço total de cada um. */

        data.comidas["Carne Bovina"].forEach(element => {
            if (element.status == true){
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = parseFloat((quilosPorItem * element.preco).toFixed(2));
            }
        });
        data.comidas["Carne Suina"].forEach(element =>{
            if (element.status == true) {
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = parseFloat((quilosPorItem * element.preco).toFixed(2));
            }
        })
        data.comidas["Frango"].forEach(element => {
            if (element.status == true) {
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = parseFloat((quilosPorItem * element.preco).toFixed(2));
            }
        })
        
        // BEBIDAS

        data.comidas.totalLitrosAdultos = ((data.pessoas["Homens"] * 20) + (data.pessoas["Mulheres"] * 15)) / 10;
        data.comidas.totalLitrosCriancas = data.pessoas["Crianças"]; // Não multiplico por nada porque considero que cada criança toma 1 litro em média de liqúido.
        
        data.comidas.totalLitros = data.comidas.totalLitrosAdultos + data.comidas.totalLitrosCriancas;

        let litrosPorItemCriancas = data.comidas.totalLitrosCriancas / data.comidas.totalItensBebidasCriancas;
        let litrosPorItemAdultos = data.comidas.totalLitrosAdultos / data.comidas.totalItensBebidas;

        data.comidas["Bebidas"].forEach(element => {
            if (element.status == true) {
                element.quantidade = (litrosPorItemAdultos + litrosPorItemCriancas).toFixed(2);
                element.precoTotal = parseFloat(((litrosPorItemAdultos + litrosPorItemCriancas) * element.preco).toFixed(2));
                if (element.nome == "Cerveja") {
                    element.quantidade = (litrosPorItemAdultos).toFixed(2);
                    element.precoTotal = parseFloat((litrosPorItemAdultos * element.preco).toFixed(2));
                }
            }
        });

        // ACOMPANHAMENTOS

        data.comidas["Acompanhamentos"].forEach(element => {
            if (element.status == true) {
                if (element.nome == "Pão de Alho (pacote)" || element.nome == "Queijo (pacote)" || element.nome == "Maionese (porção)") {
                    element.quantidade = Math.ceil(data.pessoas.total / 5);
                    element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
                } else if (element.nome == "Farofa (saco 500g)" || element.nome == "Pão Francês (saco)") {
                    element.quantidade = Math.ceil(data.pessoas.total / 10);
                    element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
                } else if (element.nome == "Arroz (panela)") {
                    element.quantidade = Math.ceil(data.pessoas.total / 20);
                    element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
                }
            }
        });

        // SEM FALTA

        data.comidas["Sem Falta"].forEach(element => {
            if (element.nome == "Carvão (kg)") {
                element.quantidade = parseFloat((data.comidas.totalCarne * 1.0).toFixed(2));
                element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
            } else if (element.nome == "Acendedor/Fósforo") {
                element.quantidade = 1;
                element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
            } else if (element.nome == "Sal de Grosso (kg)") {
                element.quantidade = parseFloat((data.comidas.totalCarne * 0.018).toFixed(2));
                element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
            } else if (element.nome == "Descartáveis (10)") {
                element.quantidade = Math.ceil(data.pessoas.total / 5);
                element.precoTotal = parseFloat((element.quantidade * element.preco).toFixed(2));
            }
        })

        // INFO
    }

    const precoTotal = () => {

        data.custoTotal = 0;
        data.custoPorPessoa = 0;

        data.comidas["Carne Bovina"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.comidas["Carne Suina"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.comidas["Frango"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.comidas["Bebidas"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.comidas["Acompanhamentos"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.comidas["Sem Falta"].forEach(element => {
            if (element.status == true) {
                data.custoTotal += element.precoTotal;
            }
        });
        data.custoTotal += data.info.local.custo;

        data.custoTotal = (data.custoTotal).toFixed(2);

        data.custoPorPessoa = parseFloat((data.custoTotal / data.pessoas.totalAdultos).toFixed(2));
    }

    const verificaNome = async (nomeChurras) => {
        const existeNome = await AsyncStorage.getItem(nomeChurras);
        return existeNome;
    }

    const armazenaChurrasco = async () => {
        const memory = JSON.stringify(data);
        await AsyncStorage.setItem(data.info.nomeChurras, memory);
    }

    const getNewData = async (dados) => {
        const response = await AsyncStorage.getItem(dados);
        const newData = JSON.parse(response);
        return newData;
    }

    const setNewData = (dados) => {
        data.custoTotal = dados.custoTotal;
        data.custoPorPessoa = dados.custoPorPessoa;
        data.pessoas = dados.pessoas;
        data.comidas = dados.comidas;
        data.info = dados.info;
    }

    const resetValores = () => {
        data.custoTotal = dataLock.custoTotal;
        data.custoPorPessoa = dataLock.custoPorPessoa;
        data.pessoas = dataLock.pessoas;
        data.comidas = dataLock.comidas;
        data.info = dataLock.info;
    }

    const removerChurras = async (churras) => {
        await AsyncStorage.removeItem(churras);
    }

    const excluirChurrascos = () => {
        AsyncStorage.clear();
    }

    const response = {
        data,
        adicionaPessoas, 
        somaPessoas,
        setItem,
        setInfo,
        mudaItem,
        calculaChurrasco,
        precoTotal,
        mudaPrecoItem,
        armazenaChurrasco,
        excluirChurrascos,
        verificaNome,
        resetValores,
        getNewData,
        setNewData,
        removerChurras
    };
    
    return(
        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}

