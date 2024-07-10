import React from 'react'
import { TextInput, View } from 'react-native'

const ProductFormField = ({ field }) => {
    // {label: 'Id', value: name, onChange: setNameForm},
    return (
        <View>
            <Text>
                {field.label}
            </Text>
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
            />
        </View>
    )
}

export default ProductFormField