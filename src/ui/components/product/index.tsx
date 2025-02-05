import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { OpacityLevel } from 'constants/tokens'
import { ProductType } from 'mappers'
import styles, { CONTAINER_WIDTH } from './styles'

export function Product(product: ProductType): React.JSX.Element {
  const navigation = useNavigation()

  const hasDiscount = product.price !== product.originalPrice

  function renderOriginalPrice() {
    if (!hasDiscount) {
      return null
    }

    return <Text style={styles.originalPrice}>$ {product.originalPrice}</Text>
  }

  function renderPrice() {
    const discountedStyle = hasDiscount ? styles.discountedStyle : null

    return (
      <Text style={[styles.price, discountedStyle]}>$ {product.price}</Text>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={OpacityLevel.overlay}
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          id: product.id,
        })
      }>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: product.thumbnail }}
        width={CONTAINER_WIDTH}
        height={CONTAINER_WIDTH * 1.3}
      />
      <Text style={styles.rating}>⭐ {product.rating}</Text>
      <View style={styles.info}>
        <Text numberOfLines={2}>{product.title}</Text>
        <View style={styles.priceGroup}>
          {renderOriginalPrice()}
          {renderPrice()}
        </View>
      </View>
    </TouchableOpacity>
  )
}
