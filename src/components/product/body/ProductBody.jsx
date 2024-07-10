import React from 'react'
import { View } from 'react-native'
import ProductBodyField from './field/ProductBodyField'

const ProductBody = ({ fields }) => {
    return (
        <View>
            {
                fields.map((field, index) => (
                    <ProductBodyField key={index} title={field.key} value={field.value} />
                ))
            }
        </View>
    )
}

export default ProductBody