import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 20,
        shadowRadius: 2,
        shadowColor: "rgba(67, 67, 67, 2)",
    },
    title:{
        fontSize: 35,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    description:{
        marginTop: "5%",
        fontSize: 20,
    },
    cardContainer: {
        alignItems: 'flex-start',
    },
})

export default styles;