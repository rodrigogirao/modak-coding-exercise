import React, {useState} from 'react';
import {Button, FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './styles';
import {Product} from '../../components/product';
import {Loader} from '../../components/loader';
import {useProductsList} from '../../../hooks/product-list';
import {useNavigation} from '@react-navigation/native';
import {CategoryType} from '../../../mappers/category/types';

export function ProductsListScreen(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null,
  );
  const {isPending, error, data, isRefetching, refetch} = useProductsList(
    selectedCategory?.slug || '',
  );
  const navigation = useNavigation();

  function onSelectFilter(category: CategoryType) {
    setSelectedCategory(category);
  }

  function renderHeader() {
    return (
      <>
        <View style={styles.filters}>
          <Button
            title="Filter"
            onPress={() =>
              navigation.navigate('Filters', {
                selectedCategory,
                onSelectFilter,
              })
            }
          />
          <Button title="Sort" />
        </View>
        {selectedCategory && (
          <View style={styles.selectedFilter}>
            <Text>
              {'Filtering by: '}
              <Text style={styles.categoryName}>{selectedCategory.name}</Text>
            </Text>
            <Button title="Clear" onPress={() => setSelectedCategory(null)} />
          </View>
        )}
      </>
    );
  }

  return (
    <>
      {isPending && <Loader />}
      <FlatList
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
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
