import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import styles from './styles';
import {product} from '../../components/product/mockProduct';

export const IMAGE_SIZE = Dimensions.get('screen').width;

export function ProductDetails(): React.JSX.Element {
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <Image
        src={product.images.at(0)}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
      />
      {isImageLoading && <ActivityIndicator size={'large'} />}
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Text>{product.discountPercentage}</Text>
      <Text>{product.sku}</Text>
      <Text>{product.category}</Text>
      <Text>{product.brand}</Text>
      <Text>{product.rating}</Text>
      <Text>{product.reviews.at(0)?.comment}</Text>
      <Text>{product.reviews.at(1)?.comment}</Text>
      <Text>{product.reviews.at(2)?.comment}</Text>
    </ScrollView>
  );
}
