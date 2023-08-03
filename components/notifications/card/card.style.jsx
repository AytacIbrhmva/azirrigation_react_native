import { StyleSheet } from "react-native";
import { SFProText } from "../../../assets/fontName/font";

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLeft: {
        flexDirection: 'row',
        gap: 12,
    },
    cardIconBg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 28,
    },
    cardText: {
        width: '68%'
    },
    cardTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: `${SFProText}-Medium`,
        lineHeight: 24,
        marginBottom: 5,
    },
    cardDesc: {
        color: '#F9F9F9',
        fontSize: 16,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 19,
        // maxWidth: 180,
    },
    cardRight: {

    },
    time: {
        color: '#F9F9F9',
        fontSize: 12,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 14,
    }
})

export default styles;