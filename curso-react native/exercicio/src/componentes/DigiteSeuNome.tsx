<<<<<<< HEAD
import React, {useState} from "react";
import { Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";

export default (props: any) => {

    let [nome, setNome] = useState ('Tamarindo')
=======
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import Padrao from '../estilo/Padrao';


export default (props: any) => {

    let [nome, setNome] = useState('Teste')
>>>>>>> ce479c1cc52a8029d9dfc26dfd3d315b664673d2

    return (
        <>
            <Text>{nome}</Text>
            <TextInput 
<<<<<<< HEAD
                placeholder="Seu nome" style={Padrao.input} 
                value={nome} onChangeText={nome => setNome(nome)} 
=======
                style={Padrao.input}
                placeholder='Digite Seu Nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
>>>>>>> ce479c1cc52a8029d9dfc26dfd3d315b664673d2
            />
        </>
    )
}