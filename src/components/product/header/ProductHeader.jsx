
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './productheader.styles'
const ProductHeader = ({ productStore }) => {
    const { id, description } = productStore

    return (
        <View style={styles.productHeader_container}>

            <Text style={styles.productHeader_title}>
                ID: {id}
            </Text>
            <Text style={styles.productHeader_info}>
                {description}
            </Text>
        </View>
    )
}

export default ProductHeader