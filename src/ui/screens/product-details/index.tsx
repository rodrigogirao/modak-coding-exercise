import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  Share,
  Text,
  View,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import styles, {IMAGE_SIZE} from './styles';
import {useProductDetails} from '../../../hooks/product-details';
import {Loader} from '../../components/loader';
import {ProductDetailProps} from './types';
import {GenericError} from '../../components/generic-error';
import {Calendar} from '../../../modules/calendar';
import {Colors} from '../../../constants/tokens';

const isAndroid = Platform.OS === 'android';

export function ProductDetails({route}: ProductDetailProps): React.JSX.Element {
  const {id} = route.params;

  const {isPending, error, data: product, refetch} = useProductDetails(id);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const navigation = useNavigation();

  const hasDiscount = product?.price !== product?.originalPrice;

  useEffect(() => {
    if (!navigation.canGoBack()) {
      navigation.setOptions({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <Button
            color={Colors.primary}
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

  function onCreateReminder() {
    if (product) {
      Calendar.createEvent(
        product.title,
        `modak-coding-exercise://product/${product.id}`,
      );
    }
  }

  function renderOriginalPrice() {
    if (!hasDiscount) {
      return null;
    }

    return <Text style={styles.originalPrice}>$ {product?.originalPrice}</Text>;
  }

  function renderPrice() {
    const discountedStyle = hasDiscount ? styles.discountStyle : null;

    return (
      <Text style={[styles.price, discountedStyle]}>$ {product?.price}</Text>
    );
  }

  function renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={styles.buttonGroup}>
            <Button color={Colors.primary} onPress={onShare} title="Share" />
            {isAndroid && (
              <Button
                color={Colors.primary}
                onPress={onCreateReminder}
                title="Remind me"
              />
            )}
          </View>
        </View>
        <View style={styles.priceGroup}>
          {renderOriginalPrice()}
          {renderPrice()}
        </View>
      </View>
    );
  }

  function renderReviews() {
    return (
      <View style={styles.reviews}>
        <View style={styles.reviewsLabels}>
          <Text style={styles.reviewsLabel}>Reviews</Text>
          <Text style={styles.reviewsLabel}>⭐️ {product?.rating}</Text>
        </View>
        {product?.reviews.map(review => {
          return (
            <View
              style={styles.review}
              key={`${review.reviewerEmail}-${review.rating}`}>
              <View style={styles.reviewDateRating}>
                <Text>{`${review.date?.toLocaleString()}`}</Text>
                <Text>⭐️ {review.rating}</Text>
              </View>
              <Text>
                {review.reviewerName} ({review.reviewerEmail})
              </Text>
              <Text style={styles.comment}>{review.comment}</Text>
            </View>
          );
        })}
      </View>
    );
  }

  function renderProductDetail() {
    if (!product) {
      return null;
    }

    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        stickyHeaderIndices={[1]}>
        <View>
          {isImageLoading && (
            <View style={styles.imageLoader}>
              <Loader />
            </View>
          )}
          <Image
            src={product.images.at(0)}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            onLoadStart={() => setIsImageLoading(true)}
            onLoadEnd={() => setIsImageLoading(false)}
          />
          <Text style={styles.brand}>{product.brand}</Text>
        </View>
        {renderHeader()}
        <Text>{product.description}</Text>
        <View>
          <Text>Sku: {product.sku}</Text>
          <Text>Stock: {product.stock}</Text>
        </View>
        {renderReviews()}
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
