import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './inputfield.styles'

const InputField = ({ label, error, onChange, placeholder }) => {

    const [text, setText] = useState('')

    const handleChange = (text) => {
        onChange(text)
        setText(text)
    }
    return (
        <View style={styles.field_container}>
            {/* <Text style={styles.label} >
                {label}
            </Text> */}
            <TextInput
                style={[
                    styles.field_input,
                    error && styles.field_errorInput
                ]}
                onChangeText={handleChange}
                value={text}
                placeholder={placeholder}
                placeholderTextColor="#666"
            />
            {error &&
                <Text style={styles.field_errorLabel}>
                    {error}
                </Text>}
        </View>
    )
}

export default InputField