import { StyleSheet } from "react-native";
import { SFProText } from "../../assets/fontName/font";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 55,
        flexDirection:'column',
        flexGrow: 1,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: `${SFProText}-Medium`,
        textAlign: 'center',
        marginBottom: 40,
    },
    cardContainer: {
        flexDirection: 'column',
        gap: 24,
    },
    headCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: `${SFProText}-Medium`,
        lineHeight: 19,
    },
    cardTitleBold: {
        color: '#fff',
        fontSize: 16,
        fontFamily: `${SFProText}-Semibold`,
        lineHeight: 19,
    },
    cardText: {
        flexDirection: 'row',
        gap: 10
    },
    cardBottom: {
        flexDirection: 'row',
        marginTop: 12,
    },
    cardLeftBtn: {
        color: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffff',
        fontSize: 16,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 19,
        textAlign: 'center',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 45,
    },
    cardLeftBtnActive: {
        color: '#27A9E1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffff',
        fontSize: 16,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 19,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 45,
    },
    cardRightBtn: {
        color: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffff',
        fontSize: 16,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 19,
        textAlign: 'center',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 28,
    },
    cardRightBtnActive: {
        color: '#27A9E1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffff',
        fontSize: 16,
        fontFamily: `${SFProText}-Regular`,
        lineHeight: 19,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 28,
    },
    cardSwitchBtn: {

    },

})

export default styles;