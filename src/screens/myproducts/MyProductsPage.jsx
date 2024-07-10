import React from 'react'
import { Text, TextInput, View } from 'react-native'
import SearchField from '../../components/searchfield/SearchField'
import ProductsContainer from '../../components/productscontainer/ProductsContainer'
import API from '../../utils/fetch/api'
import { productsExample } from '../../utils/fetch/products'
import styles from './myproducts.styles'
import InputField from '../../components/buttons/fields/InputField'

const MyProductsPage = () => {

    const [products, setProducts] = React.useState(productsExample)
    const [filteredProducts, setFilteredProducts] = React.useState([])

    const getAllProducts = async () => {
        API.products.getAllProducts()
            .then((response) => {
                setProducts(response)
                setFilteredProducts(response)
            })
    }

    const handleSearch = (text) => {
        const filtered = products.filter((product) => {
            return product.name.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredProducts(filtered)
    }

    React.useEffect(() => {
        // getAllProducts()
    }, [])

    React.useEffect(() => {
        console.log('productsExample', productsExample)
    }, [productsExample])

    return (
        <View style={styles.container}>
            <Text>My Products Page</Text>
            <InputField
                label='Search'
                placeholder='Search...'
                onChange={handleSearch}
            />
            <ProductsContainer items={filteredProducts} />
        </View>
    )
}

export default MyProductsPage