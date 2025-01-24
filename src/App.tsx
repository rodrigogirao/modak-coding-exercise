import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsListScreen} from './ui/screens/products-list';
import {ProductDetails} from './ui/screens/product-details';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FiltersScreen} from './ui/screens/filters';
import {Button} from 'react-native';

const ONE_MINUTE_STALE_TIME = 60000;

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'ProductsList',
  screens: {
    ProductsList: ProductsListScreen,
    ProductDetails: {
      screen: ProductDetails,
      linking: {
        path: 'products/:id',
      },
      options: {
        headerBackButtonDisplayMode: 'minimal',
      },
    },
    Filters: {
      screen: FiltersScreen,
      options: {
        presentation: 'modal',
        headerLeft: () => <Button title="Close" />,
      },
    },
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

const linking = {
  prefixes: ['modak-coding-exercise://'],
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation linking={linking} />
    </QueryClientProvider>
  );
}
