import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ButtonAction = ({ title, severity, action }) => {

    const severityBg = {
        primary: '#d7e612',
        secondary: '#aaadd4',
        danger: '#cf2020'
    }

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: severityBg[severity] }
            ]}
            onPress={action}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonAction