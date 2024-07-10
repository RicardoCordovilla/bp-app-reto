import React from 'react'
import { Text, View } from 'react-native'
import styles from './productbodyfield.styles'

const ProductBodyField = ({ title, value }) => {
    return (
        <View style={styles.productBodyField_container}>
            <Text style={styles.productBodyField_title}>
                {title}
            </Text>
            <Text style={styles.productBodyField_info}>
                {value}
            </Text>
        </View>
    )
}

export default ProductBodyField