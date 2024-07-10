import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import MyProductsPage from './src/screens/myproducts/MyProductsPage';
// import ProductPage from './src/screens/product/ProductPage';
import EditPage from './src/screens/editproduct/EditPage';
import ProductPage from './src/screens/product/ProductPage';
import { useProductsStore } from './src/utils/store/products.store';
import { productsExample } from './src/utils/fetch/products';

const Stack = createNativeStackNavigator();

export default function Navigation() {

    const { setProductsStore } = useProductsStore()

    useEffect(() => {
        // setProductsStore(productsExample)
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={MyProductsPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="product" component={ProductPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="edit" component={EditPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

