import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './registerrow.styles'

const RegisterRow = ({ product }) => {
    const { id, name } = product
    return (
        <TouchableOpacity >
            <View style={styles.row_container}>
                <View style={styles.row_infoColumn}>
                    <Text style={styles.row_title}>{name}</Text>
                    <Text style={styles.row_info}>{id}</Text>
                </View>
                <View style={styles.row_actions}>
                    <Text>+</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RegisterRow