import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  ScrollView,
  Share,
  Text,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useProductDetails} from '../../../hooks/product-details';
import {Loader} from '../../components/loader';
import {ProductDetailProps} from './types';
import {GenericError} from '../../components/generic-error';

export const IMAGE_SIZE = Dimensions.get('screen').width;

export function ProductDetails({route}: ProductDetailProps): React.JSX.Element {
  const {id} = route.params;

  const {isPending, error, data: product, refetch} = useProductDetails(id);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (!navigation.canGoBack()) {
      navigation.setOptions({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <Button
            title="Close"
            onPress={() => {
              navigation.dispatch(StackActions.replace('ProductsList'));
            }}
          />
        ),
      });
    }
  }, [navigation]);

  function onShare() {
    if (product) {
      Share.share({
        message: `${product.title} | modak-coding-exercise://product/${product.id}`,
      });
    }
  }

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
        <Button onPress={onShare} title="Share" />
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
      {error ? <GenericError onRetry={refetch} /> : renderProductDetail()}
    </>
  );
}
