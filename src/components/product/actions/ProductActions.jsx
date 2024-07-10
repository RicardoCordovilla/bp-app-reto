import React from 'react'
import { View } from 'react-native'
import ButtonAction from '../../buttons/ButtonAction'
import styles from './productactions.styles'

const ProductActions = ({ onEdit, onDelete }) => {
    return (
        <View style={styles.productActions_container}>
            <ButtonAction title="Editar" severity="secondary" action={onEdit} />
            <ButtonAction title="Eliminar" severity="danger" action={onDelete} />
        </View>
    )
}

export default ProductActions