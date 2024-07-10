import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View, Text, Li } from 'react-native'
import styles from './registerrow.styles'
import { useGlobalStore } from '../../utils/store/products.store'

const RegisterRow = ({ product }) => {
    const { setProductStore } = useGlobalStore()

    const { id, name } = product
    const navigate = useNavigation()

    const handleSelectProduct = () => {
        setProductStore({
            ...product,
            image: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg'
        })
        navigate.navigate('product')
    }


    return (
        <TouchableOpacity
            onPress={handleSelectProduct}
        >
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