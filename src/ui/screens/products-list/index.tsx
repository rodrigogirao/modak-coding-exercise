import React, { useState } from 'react'
import {
  Button,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { sortOptions } from 'constants/sort-options'
import { Colors } from 'constants/tokens'
import { useProductsList } from 'hooks'
import { CategoryType } from 'mappers'
import { GenericError, Loader, Product } from 'ui/components'
import styles from './styles'

export function ProductsListScreen(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null,
  )
  const [selectedSortOption, setSelectedSortOption] = useState<
    (typeof sortOptions)[0] | null
  >(null)
  const [isSortingVisible, setIsSortingVisible] = useState(false)
  const { isPending, error, data, isRefetching, refetch } = useProductsList({
    categorySlug: selectedCategory?.slug || '',
    sortOption: selectedSortOption?.value || '',
  })
  const navigation = useNavigation()

  function onSelectFilter(category: CategoryType) {
    setSelectedCategory(category)
  }

  function renderSortOptions() {
    if (!isSortingVisible) {
      return null
    }

    return (
      <View style={styles.sortOptions}>
        {sortOptions.map(sortOption => {
          const isSelected = sortOption.value === selectedSortOption?.value
          const selectedStyle = isSelected ? styles.sortOptionSelected : null

          return (
            <TouchableOpacity
              key={sortOption.value}
              style={styles.sortOption}
              onPress={() => {
                setSelectedSortOption(sortOption)
                setIsSortingVisible(false)
              }}>
              <Text style={[styles.sortOptionLabel, selectedStyle]}>
                {sortOption.label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  function renderHeader() {
    return (
      <>
        <View style={styles.filters}>
          <Button
            title="Filter"
            color={Colors.primary}
            onPress={() =>
              navigation.navigate('Filters', {
                selectedCategory,
                onSelectFilter,
              })
            }
          />
          <Button
            color={Colors.primary}
            title="Sort"
            onPress={() => setIsSortingVisible(!isSortingVisible)}
          />
          {renderSortOptions()}
        </View>
        {selectedCategory && (
          <View style={styles.selectedFilter}>
            <Text>
              {'Filtering by: '}
              <Text style={styles.categoryName}>{selectedCategory.name}</Text>
            </Text>
            <Button
              color={Colors.primary}
              title="Clear"
              onPress={() => setSelectedCategory(null)}
            />
          </View>
        )}
        {selectedSortOption && (
          <View style={styles.selectedFilter}>
            <Text>
              {'Sorting by: '}
              <Text style={styles.categoryName}>
                {selectedSortOption.label}
              </Text>
            </Text>
            <Button
              color={Colors.primary}
              title="Clear"
              onPress={() => {
                setSelectedSortOption(null)
                setIsSortingVisible(false)
              }}
            />
          </View>
        )}
      </>
    )
  }

  function renderList() {
    return (
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
        renderItem={({ item }) => <Product {...item} />}
      />
    )
  }

  return (
    <>
      {isPending && <Loader />}
      {error ? <GenericError onRetry={refetch} /> : renderList()}
    </>
  )
}
