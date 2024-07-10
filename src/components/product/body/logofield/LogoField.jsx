import React from 'react'
import { View, Image, Text } from 'react-native'

const LogoField = ({ title, image }) => {
    return (
        <View>
            <Text>
                {title}
            </Text>
            <Image source={image} style={{ width: 50, height: 50 }} />
        </View>
    )
}

export default LogoField