import React from 'react';
import { View, Text , Image } from 'react-native'
import { itemPops } from './models/HomeItemModel';

export default function HomeItem({title, images}: itemPops){
  return(
    <View>
      <Text>{title}</Text>
      <View>
        <Image src={images[1]}/>
        <Image src={images[2]}/>
        <Image src={images[3]}/>
      </View>
    </View>
  );
}
