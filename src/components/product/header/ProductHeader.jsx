
import React from 'react'
import { View } from 'react-native'

const ProductHeader = ({ id, extraInfo }) => {
    return (
        <View>
            <Text>
                ID: {id}
            </Text>
            <Text>
                {extraInfo}
            </Text>
        </View>
    )
}

export default ProductHeader