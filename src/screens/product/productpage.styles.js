import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styles/globlalstyles";

const styles = StyleSheet.create({
    productPage_container: {
        backgroundColor: '#fff',
        // padding: 10,
        marginTop: 60,
        display: 'flex',
        flexDirection: 'column',
    },
    modal_container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
    },
    modal_content: {
        backgroundColor: 'rgba(10, 30, 80, 0.4)',
        borderRadius: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    modal_close: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    modal_closeText: {
        color: '#222',
        fontSize: 20,
    },
    modal_body: {
        paddingBottom: 60,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
    },
    modal_title: {
        fontSize: 20,
        color: primaryColor,
        textAlign: 'center',
    },
    modal_actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
});

export default styles;