import React from 'react'
import { ScrollView, View } from 'react-native'
import RegisterRow from '../registerrow/RegisterRow'
import styles from './productscontainer.styles'

const ProductsContainer = ({ items }) => {
    return (
        <View style={styles.productsContainer_container}>
            {
                items.map((item, index) => (
                    <View key={item.id} >
                        <RegisterRow product={item} />
                        {
                            index < items.length - 1 &&
                            <View style={{ height: 1, backgroundColor: '#ccc' }} />
                        }
                    </View>
                ))
            }
        </View >
    )
}

export default ProductsContainer