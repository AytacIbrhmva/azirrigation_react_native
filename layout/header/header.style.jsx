import { StyleSheet } from "react-native";
import { SFProText } from "../../assets/fontName/font";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        gap: 45,
        marginBottom: -40,
    },
    onofIcon: (bgColor) => ({
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 100,
        backgroundColor: bgColor,
    }),
    time: {
        color: '#fff',
        fontSize: 20,
        marginTop: -30,
        fontFamily: `${SFProText}-Medium`,
    }
})

export default styles;