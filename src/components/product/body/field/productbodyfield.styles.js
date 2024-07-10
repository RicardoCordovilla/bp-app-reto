import { StyleSheet } from "react-native";
import { primaryColor } from '../../../../utils/styles/globlalstyles'

const styles = StyleSheet.create({
    productBodyField_container: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 25,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
    },
    productBodyField_title: {
        fontSize: 16,
        color: primaryColor,
    },
    productBodyField_info: {
        fontSize: 16,
        fontWeight: 'bold',
        color: primaryColor,
    }
});

export default styles;