import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { produtItens } from '../models/HomeItemModel';

export default function ProductItem({title,description,images,price}: produtItens) {
  return(
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <View>
        <Image src={images[1]}/>
        <Image src={images[2]}/>
        <Image src={images[3]}/>
      </View>
      <Text>R$ {price}</Text>
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <TouchableOpacity>
        <Text>{action}</Text>
      </TouchableOpacity>
    </View>
  );
}