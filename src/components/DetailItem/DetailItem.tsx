import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { detailItem } from '../models/HomeItemModel';

export default function DetailItem({title, longDescription, images, price, action, options}: detailItem){
  return(
    <View>
      <Text>{title}</Text>
      <Text>{longDescription}</Text>
      <View>
        <Image src={images[1]}/>
        <Image src={images[2]}/>
        <Image src={images[3]}/>
      </View>
      <Text>R$ {price}</Text>
      <View>
        <Text>{options[1]}</Text>
        <Text>{options[2]}</Text>
        <Text>{options[3]}</Text>
        <Text>{options[4]}</Text>
      </View>
      <TouchableOpacity>
        <Text>{action}</Text>
      </TouchableOpacity>
    </View>
  );
}