import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyProductsPage from './src/screens/myproducts/MyProductsPage';
import ProductPage from './src/screens/product/ProductPage';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={MyProductsPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="product" component={ProductPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

