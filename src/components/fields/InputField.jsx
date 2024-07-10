import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './inputfield.styles'

const InputField = ({ field }) => {
    const { label, placeholder, onChange, validation, disabled,value } = field
    const [text, setText] = useState(value)
    const [error, setError] = useState(null)

    const validationTypes = {
        number: {
            regex: '^[0-9]*$',
            error: 'Id inválido, solo números'
        },
        text: {
            regex: '^[a-zA-Z]*$',
            error: 'Solo texto'
        },
        date: {
            regex: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
            error: 'Formato de fecha incorrecto (yyyy-mm-dd)'
        }
    }

    const handleChange = (text) => {
        if (validation) {
            const regex = new RegExp(validationTypes[validation].regex)
            if (!regex.test(text)) {
                setError(validationTypes[validation].error)
            } else {
                setError(null)
            }
        }
        onChange(text)
        setText(text)
    }
    return (
        <View style={styles.field_container}>
            <Text style={styles.field_label} >
                {label}
            </Text>
            <TextInput
                editable={!disabled}
                style={[
                    styles.field_input,
                    error && styles.field_errorInput,
                    disabled && styles.field_disabledInput
                ]}
                onChangeText={handleChange}
                value={text}
                placeholder={placeholder}
            />
            {error &&
                <Text style={styles.field_errorLabel}>
                    {error}
                </Text>}
        </View>
    )
}

export default InputField