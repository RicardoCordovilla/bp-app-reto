import { StyleSheet } from "react-native";
import { primaryColor } from "../../../utils/styles/globlalstyles";

const styles = StyleSheet.create({
    productHeader_container: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    productHeader_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColor
    },
    productHeader_info: {
        fontSize: 14,
        color: primaryColor
        
    }
});

export default styles;
