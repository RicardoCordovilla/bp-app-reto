import React from 'react'
import { Text, View } from 'react-native'

const ProductBodyField = ({ title, value }) => {
    return (
        <View>
            <Text>
                {title}
            </Text>
            <Text>
                {value}
            </Text>
        </View>
    )
}

export default ProductBodyField