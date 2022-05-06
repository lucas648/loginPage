import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity} from "react-native";

import { useState } from 'react/cjs/react.production.min';
import { propsDados } from './Model';


export default function  Cadastro() {
  const [formValue, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: ''
  });

  const [error, setError] = useState({
    nome: false,
    sobrenome: false,
    email: false
  })

  const navigation = useNavigation();

  const verificarDados = ()=>{
    let nomeError = false;
    let sobrenomeError = false;
    let emailError = false;

    if(formValue.nome != '' || formValue.nome != undefined){
      nomeError= true;
    }

    if(formValue.sobrenome != '' || formValue.sobrenome != undefined){
      sobrenomeError= true;
    }

    if(formValue.email != '' || formValue.email != undefined){
      nomeError= true;
    }

    setError({...error, nome: nomeError, sobrenome: sobrenomeError, email: emailError})

    if(nomeError || sobrenomeError || emailError){
      return false
    }else{
      return true
    }
  }
  
  const onChange = (dados: propsDados)=>{
    setFormData({...formValue, ...dados})
  }
  const submitData = ()=>{
   const valid = verificarDados();

   valid ? navigation.navigate('SignIn') : null;
  }
  
  return (
    <View>
      <Text>Digite seus dados</Text>
      <TextInput 
        placeholder='Primeiro Nome' 
        value={formValue?.nome}
        onChange={(nome)=>{
          onChange({ nome })
        }}
      />
      <TextInput 
        placeholder='Sobrenome' 
        value={formValue?.sobrenome}
        onChange={(sobrenome)=>{
          onChange({sobrenome})
        }}
      />
      <TextInput
        placeholder='E-mail'
        value={formValue?.email}
        onChange={(email)=>{
          onChange({email})
        }}
      />

      <TouchableOpacity onPress={submitData()}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}