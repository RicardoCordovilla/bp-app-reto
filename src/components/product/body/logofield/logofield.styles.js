import { StyleSheet } from "react-native";
import { primaryColor } from "../../../../utils/styles/globlalstyles";

const styles = StyleSheet.create({
    logoField_container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingLeft: 25,
        paddingTop: 20,

    },
    logoField_image: {
        height: 100,
        objectFit: 'contain',
    },
    logoField_title: {
        fontSize: 16,
        color: primaryColor,
    }
});

export default styles;