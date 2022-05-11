import React from 'react';
import { View, Text ,TextInput, TouchableOpacity } from 'react-native'
import HomeItem from '../../components/HomeItem';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

  const navigation = useNavigation();

  const casasCompra = [
    '../assets/home/casa1-compra.jpg',
    '../assets/home/casa2-compra.jpg',
    '../assets/home/casa3-compra.jpg'
  ]

  const casasAluguel = [
    '../assets/home/casa1-aluguel.jpg',
    '../assets/home/casa2-aluguel.jpg',
    '../assets/home/casa3-aluguel.jpg'
  ]
  return(
    <View>
      <View>
        <Text>Bem vindo!!</Text>
        <Text>o que deseja hoje??</Text>
      </View>
      <View>
        <TextInput 
          placeholder='Digite o que busca ...'
        />
        <TouchableOpacity onPress={()=>{navigation.navigate('Aluguel')}}>
          <HomeItem 
            title='Alugar' 
            images={casasCompra}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Compra')}}>
          <HomeItem 
            title='comprar' 
            images={casasAluguel}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}