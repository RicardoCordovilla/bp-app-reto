import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import SearchField from '../../components/searchfield/SearchField'
import ProductsContainer from '../../components/productscontainer/ProductsContainer'
import API from '../../utils/fetch/api'
import { productsExample } from '../../utils/fetch/products'
import styles from './myproducts.styles'
import InputField from '../../components/fields/InputField'
import { useGlobalStore, useProductsStore } from '../../utils/store/products.store'
import ButtonAction from '../../components/buttons/ButtonAction'
import { useNavigation } from '@react-navigation/native'

const MyProductsPage = () => {

    const { productsStore } = useProductsStore()
    const { setProductStore } = useGlobalStore()
    const [products, setProducts] = useState(productsStore)
    const [filteredProducts, setFilteredProducts] = React.useState(productsStore)

    const navigate = useNavigation()


    const handleSearch = (text) => {
        const filtered = products.filter((product) => {
            return product.name.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredProducts(filtered)
    }

    const addProduct = () => {
        setProductStore({
            id: '00' + (products.length + 1),
        })
        navigate.navigate('edit')
    }


    useEffect(() => {
        setFilteredProducts(productsStore)
        setProducts(productsStore)
    }, [productsStore])



    const searchField = {
        label: 'Search',
        placeholder: 'Search...',
        onChange: handleSearch,
        validation: 'text',
        disabled: false,
        value: ''
    }


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InputField field={searchField} />
                <ProductsContainer items={filteredProducts} />
                <View style={{ height: 30 }} />
            </ScrollView>
            <ButtonAction title='Agregar' severity='primary' action={addProduct} />
        </View>
    )
}

export default MyProductsPage