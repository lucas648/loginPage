import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native'
import ProductItem from '../../../components/ProductItem/ProductItem';

export default function Compra(){

  const navigation = useNavigation();

  return(
    <View>
      <Text>Casas parar Comprar: </Text>
      <View onPress={()=>{navigation.navigate('')}}>
        <ProductItem
          title='Casa na Praia'
          description='Casa confortável com bom espaço interno, dois quartos e uma das principais ruas da cidade'
          images={['', '', '']}
          price='1235,89'
        />
      </View>

      <View onPress={()=>{navigation.navigate('')}}>
        <ProductItem
          title='Apartamento no centro da cidade'
          description='Apartamento confortável com bom espaço interno, dois quartos, uma suíte, próximo ao metrô'
          images={['', '', '']}
          price='2345,89'
        />
      </View>

      <View onPress={()=>{navigation.navigate('')}}>
        <ProductItem
          title='Casa com quintal'
          description='Casa ampla, com pé direito alto, espaço grande no quintal duas suítes e cozinha americana'
          images={['', '', '']}
          price='5679,00'
        />
      </View>

      <View onPress={()=>{navigation.navigate('')}}>
        <ProductItem
          title='Apartamento em bairro nobre'
          description='Apartamento de 3 quartos 1 suíte e cozinha espaçosa, área de lazer inclusa no condominio'
          images={['', '', '']}
          price='2563,00'
        />
      </View>
    </View>
  );
}