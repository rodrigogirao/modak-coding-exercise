import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {Product} from '../../components/product';
import {Loader} from '../../components/loader';
import {useProductsList} from '../../../hooks/product-list';

export function ProductsListScreen(): React.JSX.Element {
  const {isPending, error, data, isRefetching, refetch} = useProductsList();

  return (
    <>
      {isPending && <Loader />}
      <FlatList
        style={styles.flatList}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={data?.products}
        renderItem={({item}) => <Product {...item} />}
      />
    </>
  );
}
