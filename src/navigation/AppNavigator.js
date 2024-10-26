import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/ProductListScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: "Products" }}
        />
        <Stack.Screen
          name="DeliveryScreen"
          component={DeliveryScreen}
          options={{ title: "Delivery Estimate" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
