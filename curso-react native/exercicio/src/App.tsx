import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";

import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

import UsuarioLogado from "./componentes/UsuarioLogado";

import Botao from "./componentes/Botao";

import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";

export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>

{/*  Botao /> */}

        <Contador valorInicial = {50} />







        {/*<Simples texto='Duda' /> 
         <Frag titulo="Cadastro" 
              subTitulo="Teda de Cadastro de Produto" /> 
         <ParImpar numero={9}  /> 8 
        <Familia>
            <Membro nome="Ana" sobreNome="Silva"/>
            <Membro nome="José" sobreNome="Silva"/> 
        </Familia> */}


       {/* <UsuarioLogado usuario={ {nome:'teste', email:'DUDa.com.br'} } /> 
        <UsuarioLogado usuario={ {nome:'teste 2'} } />
        <UsuarioLogado usuario={ {email:'teste@teste.com'} } />        
        <UsuarioLogado usuario={ {} } />
<<<<<<< HEAD
      <UsuarioLogado usuario={ null } />*/ }
      
        {/*<Botao />*/}

        {/*<Contador valorInicial={50} />*/}

      <DigiteSeuNome />
=======
        <UsuarioLogado usuario={ null } /> 
        <Contador valorInicial={55} /> */}
        
        <DigiteSeuNome />
>>>>>>> ce479c1cc52a8029d9dfc26dfd3d315b664673d2

      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,
    },
  });