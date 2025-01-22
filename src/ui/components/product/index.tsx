import React from 'react';
import {View, Text, Image} from 'react-native';
import {product} from './mockProduct';
import styles, {CONTAINER_SIZE} from './styles';

export function Product(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: product.thumbnail}}
        width={CONTAINER_SIZE}
        height={CONTAINER_SIZE * 1.3}
      />
      <View style={styles.info}>
        <Text numberOfLines={2}>{product.title}</Text>
        <View style={styles.price}>
          <Text>$ {product.price}</Text>
          <Text>
            ${' '}
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
