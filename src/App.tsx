import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsListScreen} from './ui/screens/products-list';
import {ProductDetails} from './ui/screens/product-details';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const ONE_MINUTE_STALE_TIME = 60000;

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'ProductsList',
  screens: {
    ProductsList: ProductsListScreen,
    ProductDetails: ProductDetails,
  },
});

const Navigation = createStaticNavigation(RootStack);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_MINUTE_STALE_TIME,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
