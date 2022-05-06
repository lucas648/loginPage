import React from 'react';
import { View, Text ,TextInput, Image } from 'react-native'
import HomeItem from '../../components/HomeItem';

export default function Home(){
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
        <HomeItem 
          title='Alugar' 
          images={casasCompra}
        />
        <HomeItem 
          title='comprar' 
          images={casasAluguel}
        />
      </View>
    </View>
  );
}