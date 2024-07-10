import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import SearchField from '../../components/searchfield/SearchField'
import ProductsContainer from '../../components/productscontainer/ProductsContainer'
import API from '../../utils/fetch/api'
import styles from './myproducts.styles'
import InputField from '../../components/fields/InputField'
import { useGlobalStore, useProductsStore } from '../../utils/store/products.store'
import ButtonAction from '../../components/buttons/ButtonAction'
import { useNavigation } from '@react-navigation/native'



const MyProductsPage = () => {
    const navigate = useNavigation()
    const { productsStore } = useProductsStore()
    const { setProductStore } = useGlobalStore()
    const [products, setProducts] = useState(productsStore)
    const [filteredProducts, setFilteredProducts] = React.useState(productsStore)
    const [searchText, setSearchText] = React.useState('')


    const searchField = {
        label: 'Search',
        placeholder: 'Search...',
        onChange: setSearchText,
        validation: 'text',
        disabled: false,
        value: ''
    }


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


    const getProducts = async () => {
        const response = await API.products.getAllProducts()
        setProducts(response)
    }

    useEffect(() => {
        handleSearch(searchText)
    }, [searchText])

    useEffect(() => {
        setFilteredProducts(productsStore)
        setProducts(productsStore)
    }, [productsStore])


    useEffect(() => {
        getProducts()
    }, [])



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InputField field={searchField} />
                {
                    filteredProducts.length > 0 &&
                    <ProductsContainer items={filteredProducts} />
                }
                <View style={{ height: 30 }} />
            </ScrollView>
            <ButtonAction title='Agregar' severity='primary' action={addProduct} />
        </View>
    )
}

export default MyProductsPage