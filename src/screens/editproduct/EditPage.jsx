import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ProductForm from '../../components/productform/ProductForm'
import { useGlobalStore, useProductsStore } from '../../utils/store/products.store'
import styles from './editpage.styles'
import { useNavigation } from '@react-navigation/native'

const EditPage = () => {
    const navigate = useNavigation()
    const { productStore, setProductStore } = useGlobalStore()
    const { setProductsStore, productsStore, removeProduct } = useProductsStore()

    const verifyProductExist = (product) => {
        const exist = productsStore.find((item) => item.id === product.id)
        return exist
    }

    const createNewProduct = (product) => {
        const newProducts = [...productsStore, product]
        setProductsStore(newProducts)
        navigate.navigate('home')
        return
    }

    const updateProducts = (product) => {
        if (!verifyProductExist(product)) {
            createNewProduct(product)
        }

        else {
            const updatedProducts = productsStore.map((item) => {
                if (item.id === product.id) {
                    return product
                }
                return item
            })
            setProductsStore(updatedProducts)
            navigate.navigate('product')
        }
    }

    const handleEdit = (product) => {
        setProductStore(product)
        updateProducts(product)
    }

    return (
        <View style={styles.editPage_container}>
            <TouchableOpacity onPress={() => navigate.navigate('product')}>
                <Text> Atras </Text>
            </TouchableOpacity>
            <ProductForm
                product={productStore}
                updateProduct={handleEdit}
            />
        </View>
    )
}

export default EditPage