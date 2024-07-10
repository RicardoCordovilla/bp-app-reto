import React from 'react'
import { View, TextInput } from 'react-native'

const SearchField = ({ onChangeText }) => {

    const [text, setText] = React.useState('')

    const handleOnChangeText = (text) => {
        setText(text)
        onChangeText(text)
    }

    return (
        <View>
            <TextInput
                // style={styles.input}
                placeholder='Search...'
                value={text}
                onChangeText={handleOnChangeText}
            />
        </View>
    )
}

export default SearchField