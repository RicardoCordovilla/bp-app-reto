import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    field_container: {
        backgroundColor: '#fff',
        height: 'fit-content',
        marginVertical: 10,
        flexDirection: 'column',
        gap: 10,
    },
    field_label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10
    },
    field_input: {
        height: 50,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    field_errorLabel: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10
    },
    field_errorInput: {
        borderBlockColor: 'red'
    }
})

export default styles