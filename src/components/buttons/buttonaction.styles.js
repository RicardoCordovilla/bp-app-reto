import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styles/globlalstyles";

const styles = StyleSheet.create({
    buttonAction_container: {
        width: '100%',
        borderRadius: 5,
        textAlign: 'center',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    buttonAction_title: {
        fontSize: 20,
        textAlign: 'center',
        color:primaryColor,
        fontWeight: '500',
    }
});

export default styles;
