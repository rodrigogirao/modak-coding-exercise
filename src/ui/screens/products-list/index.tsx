import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import {product} from '../../components/product/mockProduct';
import {Product} from '../../components/product';

export function ProductsListScreen(): React.JSX.Element {
  return (
    <FlatList
      style={styles.flatList}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={2}
      data={[product, product, product, product, product, product]}
      renderItem={_item => <Product />}
    />
  );
}
