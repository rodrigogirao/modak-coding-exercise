import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsListScreen} from './ui/screens/products-list';
import {ProductDetails} from './ui/screens/product-details';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'ProductsList',
  screens: {
    ProductsList: ProductsListScreen,
    ProductDetails: ProductDetails,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
