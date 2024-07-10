import React from 'react'
import { Button, View } from 'react-native'

const ProductActions = ({ onEdit, onDelete }) => {
    return (
        <View>
            <TouchableOpacity onPress={onEdit}>
                <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductActions