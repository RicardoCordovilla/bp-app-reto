import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './buttonaction.styles'

const ButtonAction = ({ title, severity, action }) => {


    const severityStyles = {
        primary: {
            bg: '#ebee40',
            border: '#000'
        },
        secondary: {
            bg: '#e1e1eb',
            border: '#a19e9e',
        },
        danger: {
            bg: '#c22424',
            color: '#fff',
            border: 'transparent'
        }

    }


    return (
        <TouchableOpacity onPress={action}>
            <View style={[
                styles.buttonAction_container,
                {
                    backgroundColor: severityStyles[severity].bg,
                    borderColor: severityStyles[severity].border
                }
            ]}>
                <Text
                    style={[styles.buttonAction_title,
                    { color: severityStyles[severity].color }
                    ]}>
                    {title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonAction