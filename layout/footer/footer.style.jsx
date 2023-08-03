import { StyleSheet } from "react-native";
import { SFProText } from "../../assets/fontName/font";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
    },
    linkItem: {
        alignItems: 'center'
    },
    linkText: {
        color: '#ECECEC',
        fontSize: 12,
        fontFamily: `${SFProText}-Medium`,
    }
})

export default styles;