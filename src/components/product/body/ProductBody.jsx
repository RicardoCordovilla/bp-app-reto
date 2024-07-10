import React from 'react'
import { View } from 'react-native'
import ProductBodyField from './field/ProductBodyField'

const ProductBody = ({ productStore }) => {
    console.log(productStore)
    const { id, name, description, date_revision, date_release } = productStore
    const fields = [
        { key: 'Nombre', value: name },
        // { key: 'Descripción', value: description },
        { key: 'Fecha de revisión', value: date_revision },
        { key: 'Fecha de liberación', value: date_release }
    ]
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