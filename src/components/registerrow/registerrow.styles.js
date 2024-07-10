import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row_container: {
        backgroundColor: '#fff',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 1,
        
    },

    row_infoColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5,
    },

    row_title: {
        fontSize: 18,
        color: '#346',
    },
    row_info: {
        fontSize: 16,
        color: '#666',
    }
})

export default styles
