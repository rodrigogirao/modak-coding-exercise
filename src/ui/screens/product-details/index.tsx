import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import styles from './styles';
import {useProductDetails} from '../../../hooks/product-details';
import {Loader} from '../../components/loader';
import {ProductDetailProps} from './types';

export const IMAGE_SIZE = Dimensions.get('screen').width;

export function ProductDetails({route}: ProductDetailProps): React.JSX.Element {
  const {id} = route.params;

  const {isPending, error, data: product} = useProductDetails(id);
  const [isImageLoading, setIsImageLoading] = useState(false);

  function renderProductDetail() {
    if (!product) {
      return null;
    }

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
        <Text>{product.originalPrice}</Text>
        <Text>{product.price}</Text>
        <Text>{product.sku}</Text>
        <Text>{product.categorySlug}</Text>
        <Text>{product.brand}</Text>
        <Text>{product.rating}</Text>
        <Text>{product.stock}</Text>
        <Text>{product.reviews.at(0)?.comment}</Text>
        <Text>{product.reviews.at(1)?.comment}</Text>
        <Text>{product.reviews.at(2)?.comment}</Text>
      </ScrollView>
    );
  }
  return (
    <>
      {isPending && <Loader />}
      {renderProductDetail()}
    </>
  );
}
