// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  const products = [
    { id: 1, name: 'Sesderma Azelac RU Liposomal Serum', price: 2650, inStock: true },
    // Add more products as needed
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" options={{ title: 'Products' }}>
          {() => <ProductListScreen products={products} />}
        </Stack.Screen>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
